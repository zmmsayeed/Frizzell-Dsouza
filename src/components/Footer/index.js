import "./style.css";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
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
            {/* <p>
              <a href="#">Terms & Conditions</a> | 
              Privacy Policy
            </p> */}
          </div>

            <div className="col-md-4 col-6 col-lg-4">
                <p className="heading mb-1">Quick Links</p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#music" className="footer-link">Music</a>
                    <a href="#subscribe" className="footer-link">Subscribe</a>
                    <a href="#about" className="footer-link">About</a>
                    <a href="#watch" className="footer-link">Watch</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#gallery" className="footer-link">Gallery</a>
                    <a href="#press" className="footer-link">Press</a> 
                    <a href="#contact" className="footer-link">Contact</a>
                    </div>
                </div>  
            </div>

            <div className="col-md-4 col-6 col-lg-4">
                <p className="heading mb-1">Resources</p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="https://www.thehindu.com/entertainment/music/mangaluru-singer-frizzell-dsouzas-latest-single-foolish-once-again-a-love-ballad/article34738014.ece" className="footer-link">The Hindu</a>
                    <a href="#" className="footer-link">Times of India</a>
                    <a href="#" className="footer-link">Browngirl</a>
                    <a href="https://rollingstoneindia.com/tag/frizzell-dsouza/" className="footer-link">Rolling Stone</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <a href="#" className="footer-link">Springtide</a>
                    <a href="https://www.platform-mag.com/music/frizzell-dsouza.html" className="footer-link">Platform Magazine</a> 
                    <a href="https://homegrown.co.in/article/805438/homegrowns-picks-from-music-last-week-hari-sukhmani-frizzell-dsouza-punk-on-toast-more" className="footer-link">Homegrown</a>
                    <a href="https://www.radiocity.in/indie/news/women-of-indie-meet-these-8-homegrown-artists-who-redefine-independent-music--129" className="footer-link">Radio City</a>
                    </div>
                </div>
            </div>  
        </div>
      </div>

      <hr />

      <div className="container text-center">
        <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} The Urban Weaver. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
