
class HomePage extends PageBuilderBase {

  constructor() {
    super('home')
  }

  // Draw the page
  draw_main_contents() {
    return `
      <div class="container">
        <h2>Welcome to Davies Web development</h2>
        <p>
          We specialize in creating beautiful and functional websites for our clients.
          "Building a website is like constructing a digital masterpiece. It's not just about lines of code;
          it's about crafting an experience that resonates with your audience, leaving a lasting impression.
          At Davies Web Development, we don't just create websites; we create online destinations that inspire,
          engage, and empower." 
        </p>
        <div class="image-text-section">
          <div class="image">
            <img class="image" src="images/image_16871169.JPG" alt="image of me">
          </div>
          <div class="image">
            <img class="image" src="images/cliffside400 (1).png" alt="greek cliffside">
          </div>
          <div class="image">
          </div>
          <div class="text">
            <h2>About us</h2>
            <p>Founded By me Owen Davies the self-taught coder from no qualifications yet I can still develop. Developing is
              a
              lifestyle/hobby rather than a job in my eyes it's about creating lines of code into something special.
              "I simply enjoy the art"</p>
            <button><a href="contact.html">Contact Us</a></button>
          </div>
        </div>
      </div>
    `
  }

}