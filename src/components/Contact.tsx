export default function Contact() {
  return (<article className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>

        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.63804280147!2d46.49288314717239!3d24.724831573306542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1721416699865!5m2!1sen!2ssa"
            width="400" height="300" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required
                   data-form-input/>

            <input type="email" name="email" className="form-input" placeholder="Email address" required
                   data-form-input/>
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required
                    data-form-input></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </article>

  );
}