import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:saifullakhan578@gmail.com" data-cursor="disable">
                saifullakhan578@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919740533432" data-cursor="disable">
                +91 9740533432
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Saifullakhan009"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/saif-ulla-khan-65289b214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>

          {/* Footer Info */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Saif Ulla Khan</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
