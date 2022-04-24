import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';

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
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <h1 className="contact-getintouch">Get In <br /> Touch</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
              <p>
                <MdEmail  className='mr-2'/>
                theurbanweaverproject<span className="montserrat">@</span>gmail.com
              </p>
              <p>
                <FaPhoneSquareAlt className='mr-2'/>
                <span className="montserrat">+</span>91  12325 67890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
