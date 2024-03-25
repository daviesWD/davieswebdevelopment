
class ServicesPage extends PageBuilderBase {

  constructor() {
    super('contact')
  }

  // Draw the page
  draw_main_contents() {
    return `
      <div class="container">
        <h2>Our Services</h2>
        <div class="service">
          <h3>Website Design</h3>
          <p>
            Our web composition administration centers around making outwardly shocking
            and easy to understand sites customized to your business needs. We work
            intimately with our clients to grasp their image character, ideal interest group,
            and business goals. Our group of experienced planners joins inventiveness with usefulness
            to convey sites that look perfect as well as drive results. Whether you really want a straightforward
            portfolio site or a mind boggling internet business stage, we have the skill to rejuvenate your vision.
          </p>
        </div>
        <div class="service">
          <h3>Web Development</h3>
          <p>
            From concept to launch, our web development service covers the entire spectrum of building
            robust and scalable web solutions. We specialize in developing custom websites, web applications,
            and content management systems that meet the unique requirements of each client. Using the
            latest web technologies and best practices, we ensure that your website is fast, secure, and
            responsive across all devices. Whether you're starting from scratch or looking to revamp your
            existing website, we're here to help you achieve your online goals.
          </p>
        </div>
        <div class="service">
          <h3>Responsive Design</h3>
          <p>
            In the present portable first world, it's fundamental for your site to look perfect
            and capability faultlessly on all gadgets. Our responsive plan administration guarantees
            that your site adjusts flawlessly to different screen sizes and goals, giving an ideal review
            insight to your guests. Whether they're perusing on a work area, PC, tablet, or cell phone,
            they'll partake in a predictable and natural client experience. We focus on portable responsiveness
            in the entirety of our plan and improvement ventures to help you reach and draw in with your crowd
            successfully.
          </p>
        </div>
      </div>
    `
  }

}