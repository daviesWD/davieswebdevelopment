

class PageBuilderBase {

  constructor(page) {
    this.page_container = document.getElementById('main')
    this.page = page;
  } 

  // Draw the page header
  draw_page_header() {
    this.page_container.innerHTML += `
      <header>
        <img class="logo" src="./images/logo_OD.png" alt="logo">
        <h1>Davies Web Development</h1>
      </header>
    `
  }

  // Draw the nav bar to the page
  draw_nav_bar() {
    this.page_container.innerHTML += `
    <nav>
      <div class="page_link" data-page="home">Home</div>
      <div class="page_link" data-page="about">About</div>
      <div class="page_link" data-page="services">Services</div>
      <div class="page_link" data-page="contact">Contact</div>
    </nav>
    `
  }

  // Draw the footer
  draw_footer() {
    this.page_container.innerHTML += `
      <footer>
        <div class="container">
          <p>&copy; 2024 Davies Web Development. All rights reserved.</p>
        </div>
      </footer> 
    `
  }

  // Write the main page contents --- THis should be implemented in a derived class
  draw_main_contents() {}

  // Build the page -- This gets called in the page router
  build_page() {

    // Clear the current page contents
    this.page_container.innerHTML = "";

    // Draw the header and nav bar
    this.draw_page_header();
    this.draw_nav_bar();

    // Get the page html and append
    let contents = this.draw_main_contents();
    this.page_container.innerHTML += contents;

    // Draw the footer
    this.draw_footer();

  }

}