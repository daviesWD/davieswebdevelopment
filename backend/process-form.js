// submitForm.js

const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Update path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com' // Update with your database URL
});

// Create a reference to your database
const db = admin.database();

// Handle form submission
exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  try {
    // Store form submission in the database
    await db.ref('contact_messages').push({
      name,
      email,
      message,
      timestamp: admin.database.ServerValue.TIMESTAMP
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error occurred while saving message.' })
    };
  }
};