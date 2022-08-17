import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../index.css';
import "./style.css";

function About({refSection}) {
  return (
    <div ref={refSection}>
      <div id="about">
        <div className="container mt-5">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <h1 className="about-heading mb-lg-5 mb-md-5 mb-3">About</h1>
          </AnimationOnScroll>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 pr-md-5 pr-lg-5 order-md-1 order-lg-1 order-2">
              <AnimationOnScroll animateIn="animate__bounceIn">
                <p>
                  Frizzell D’Souza is a singer<span className='montserrat'>-</span>songwriter based out of
                  Bangalore, who started out with her own renditions of songs on YouTube in 
                  2018 and got into songwriting during the 2020 pandemic. 
                </p>

                <p>
                  Since 2018, she has released four singles and with consistent effort has garnered a collective audience of 
                  55,000<span className='montserrat'>+</span> listeners across her social media. 
                </p>

                <p>
                  She has a penchant for simple melodies and songwriting <span className='montserrat'>-</span> The core of her music lies in translating emotions 
                  and is also influenced by her love for retro classics and indie music.
                </p>
                <p>
                  As she comes to the end of her course in bachelor<span className='montserrat'>'</span>s in Architecture, Frizzell is also currently 
                  working on releasing her debut EP.
                </p>


                <a href='/ArtistProfile_New.pdf' target='_blank'>
                  <button className='btn btn-primary mt-3'>Download EPK</button>
                </a>
              </AnimationOnScroll>
            </div>
            <div className="col-12 col-md-6 col-lg-6 order-lg-2 order-md-2 order-1">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <img src="/images/about_latest.jpg" alt="Missing" className='img-fluid about-img'/>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
