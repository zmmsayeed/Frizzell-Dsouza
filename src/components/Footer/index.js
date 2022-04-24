import "./style.css";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSpotify,
  FaFacebookSquare,
} from "react-icons/fa";
import {BsMusicNoteBeamed} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 col-lg-4">
            <h2>
              Frizzell D<span className="montserrat">'</span>Souza
            </h2>

            <p className="mt-4">
              <a
                href="https://www.youtube.com/channel/UCpDjYVQS411CBBw0thoB0Sw"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <FaYoutube size={22} />
              </a>

              <a
                href="https://www.fb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <FaFacebookSquare size={22} />
              </a>

              <a
                href="https://www.instagram.com/frizzell.dsouza"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://twitter.com/toothpickyy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://soundcloud.com/frizzelldsouza"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
              >
                <BsMusicNoteBeamed size={20} />
              </a>
            </p>
          </div>

            <div className="col-md-4 col-12 col-lg-4">
                <p className="heading mb-1">Quick Links</p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#" className="footer-link">Music</a>
                    <a href="#" className="footer-link">Subscribe</a>
                    <a href="#" className="footer-link">About</a>
                    <a href="#" className="footer-link">Watch</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#" className="footer-link">Gallery</a>
                    <a href="#" className="footer-link">Press</a> 
                    <a href="#" className="footer-link">Contact</a>
                    </div>
                </div>  
            </div>

            <div className="col-md-4 col-12 col-lg-4">
                <p className="heading mb-1">Resources</p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#" className="footer-link">The Hindu</a>
                    <a href="#" className="footer-link">TOI</a>
                    <a href="#" className="footer-link">Browngirl</a>
                    <a href="#" className="footer-link">Rolling Stone</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#" className="footer-link">Springtide</a>
                    <a href="#" className="footer-link">Platform</a> 
                    <a href="#" className="footer-link">Homegrown</a>
                    <a href="#" className="footer-link">Radio City</a>
                    </div>
                </div>
            </div>  
        </div>
      </div>

      <hr />

      <div className="container text-center">
        <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} The Urban Weaver Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
