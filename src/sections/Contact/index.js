import { FaInstagram, FaYoutube, FaTwitter, FaSoundcloud } from 'react-icons/fa';
import "../../index.css";
import "./style.css";

function Contact() {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div class="container">
            <div class="row ">
              <div class="col-md-5 col-lg-5 col-12 getintouch">
                Get in touch.
              </div>
              <div class="col-md-6 col-lg-6 col-12 offset-md-1 offset-lg-1 touch-right">
                <div class="social-links">
                  <a
                    href="https://www.instagram.com/frizzell.dsouza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-box"
                  >
                    <FaInstagram size={30} style={{ marginLeft:'8px' }} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpDjYVQS411CBBw0thoB0Sw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-box"
                  >
                    <FaYoutube size={28} />
                  </a>
                  <a
                    href="https://twitter.com/toothpickyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-box"
                  >
                    <FaTwitter size={25} />
                  </a>
                  <a
                    href="https://soundcloud.com/frizzelldsouza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-box"
                  >
                    <FaSoundcloud size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <h1 className="reach">Reach</h1>
            <h1 className="contact-frizzell">Frizzell<span className="period">.</span></h1> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
