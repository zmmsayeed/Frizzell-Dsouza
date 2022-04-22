import '../../index.css';
import "./style.css";

function About({refSection}) {
  return (
    <div ref={refSection}>
      <div id="about">
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="about-heading">
                About<span className="period">.</span>
              </h1>
              {/* <h4 className="about-sub-heading">Frizzell</h4> */}

              <p className="mt-4">
                <b className="about-sub-heading">Frizzell D’souza</b> is a singer-songwriter based out of
                Bangalore, who first showcased her talent by uploading song
                covers on her Youtube channel back in 2018.
              </p>

              <p>
                Two years since then and with consistent effort put along the
                way, she has built a family of 25000+ subscribers on YouTube and
                a large following on her social media as well. The core of her
                music lies in translating emotions and is also influenced by her
                love for retro classics and indie music.
              </p>
              <p>
                Currently pursuing her bachelor's in Architecture, on the
                sidelines, Frizzell is also an art enthusiast who is known for
                her signature denim artworks.
              </p>

              <button className='btn btn-primary mt-3'>Download EPK</button>
            </div>
            <div className="col-12 col-md-5 col-lg-5 offset-md-1 offset-lg-1">
                <img src="/images/about.jpg" alt="Missing" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
