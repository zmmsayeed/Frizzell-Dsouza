import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaInstagram, FaYoutube, FaTwitter, FaSpotify } from 'react-icons/fa';

import "../../index.css";
import "./style.css";

function Contact({ refSection }) {
  return (
    <div ref={refSection}>
      <div id="contact">
        <div className="row no-gutters">
          <div className="col-6 col-md-6 col-lg-6">
            <img
              src="/images/contact-img1.png"
              className="img-fluid"
              alt="contact-img1"
            />
          </div>
          <div className="col-6 col-md-6 col-lg-6">
            <img
              src="/images/contact-img2.png"
              className="img-fluid"
              alt="contact-img1"
            />
          </div>
        </div>
        
        <div className="container contact-content">
          <div className="row w-100">
            <div className="col-12 col-md-6 col-lg-6 text-center mt-4">
              <h1 className="contact-getintouch">Get In <br /> Touch</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
              <p>
                {/* <MdEmail  className='mr-2'/> */}
                {/* theurbanweaverproject<span className="montserrat">@</span>gmail.com */}
                For Bookings and Queries:
              </p>
              <h4 className='text-center text-md-left text-lg-left'>
                {/* <FaPhoneSquareAlt className='mr-2'/> */}
                {/* <span className="montserrat">+</span>91 99<span className="montserrat">4</span>59 93522 */}
                reach<span className="montserrat">@</span>frizzelldsouza.in
              </h4>

              <p className='mt-4'>
                <div className="social-media-wrapper">
                  <a href="https://www.instagram.com/frizzell.dsouza" target="_blank" rel="noopener noreferrer" className='social-box'>
                      <FaInstagram size={30} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCpDjYVQS411CBBw0thoB0Sw" target="_blank" rel="noopener noreferrer" className='social-box'>
                      <FaYoutube size={35} />
                  </a>
                  <a href="https://twitter.com/frizzelldsouza" target="_blank" rel="noopener noreferrer" className='social-box'>
                      <FaTwitter size={30} />
                  </a>
                  <a href="https://open.spotify.com/artist/17j8WfojaUlIDrnDG7IfIQ?si=Zs7vG1foR_S3znxY0wiQbQ" target="_blank" rel="noopener noreferrer" className='social-box'>
                      <FaSpotify size={30} />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
