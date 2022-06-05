import '../../index.css';
import "./style.css";

function About({refSection}) {
  return (
    <div ref={refSection}>
      <div id="about">
        <div className="container mt-5">
          <h1 className="about-heading mb-lg-5 mb-md-5 mb-3">About</h1>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 pr-md-5 pr-lg-5 order-md-1 order-lg-1 order-2">
              <p>
                Frizzell D’Souza is a singer<span className='montserrat'>-</span>songwriter based out of
                Bangalore, who first showcased her talent by uploading song
                covers on her Youtube channel back in 2018.
              </p>

              <p>
                Two years since then and with consistent effort put along the
                way, she has built a family of 25000<span className='montserrat'>+</span> subscribers on YouTube and
                a large following on her social media as well. The core of her
                music lies in translating emotions and is also influenced by her
                love for retro classics and indie music.
              </p>
              <p>
                Currently pursuing her bachelor<span className='montserrat'>'</span>s in Architecture, on the
                sidelines, Frizzell is also an art enthusiast who is known for
                her signature denim artworks.
              </p>


              <a href='/Artist Profile.pdf' target='_blank'>
                <button className='btn btn-primary mt-3'>Download EPK</button>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 order-lg-2 order-md-2 order-1">
              <img src="/images/about.png" alt="Missing" className='img-fluid about-img'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
