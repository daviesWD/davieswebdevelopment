
class AboutPage extends PageBuilderBase {

  constructor() {
    super('about')
  }

  // Draw the page
  draw_main_contents() {
    return `
      <div class="container">
          <h2>About Us</h2>
          <!-- About Information -->
          <div class="about-info">
              <h3>Our Story</h3>
              <p>
                Founded by Owen Davies, Davies Web Development started as a passion project fueled by 
                a love for coding and a desire to create something special. With dedication, hard work,
                and a commitment to excellence, we've grown into a full-service web development company 
                dedicated to helping businesses succeed online.
              </p>
          </div>
          <div class="about-info">
              <h3>Our Mission</h3>
              <p>
                At Davies Web Development, our mission is simple: to empower businesses with the tools
                and solutions they need to thrive in the digital world. We believe in the power of 
                innovation, creativity, and collaboration to deliver exceptional results that exceed 
                our clients' expectations. email me for enquiries.
              </p>
          </div>
          <!-- Add more about information as needed -->
      </div>
    `
  }

}