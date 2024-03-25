
class ContactPage extends PageBuilderBase {

  constructor() {
    super('contact')
  }

  // Draw the page
  draw_main_contents() {
    return `
      <div class="container">
        <h2>Contact Us</h2>
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:infodavieswd@gmail.com">infodavieswd@gmail.com</a></p>
          <!-- Add more contact details if applicable -->
        </div>
      </div>
    `
  }

}