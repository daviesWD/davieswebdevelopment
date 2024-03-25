//==================================================
//
// This javascript handles page routing
//
//==================================================


// Get the page classes
const pages = {
  home: new HomePage(),
  about: new AboutPage(),
  contact: new ContactPage(),
  services: new ServicesPage(),
}


//==== The following code implements the page changing functionality

// Add the page event listeners. Here we are listening for page changes
function add_event_listeners() {

  // Get all the page links
  let page_links = document.querySelectorAll('.page_link');

  // Add a click handler for each link which takes us to the correct page
  page_links.forEach(link => link.addEventListener('click', function() {
    let page = link.getAttribute('data-page');
    get_page(page);
  }))
}

// Load a page
function get_page(page_name) {
  pages[page_name].build_page();
  add_event_listeners();
}

// Start on the home page
document.addEventListener('load', get_page('home'));

