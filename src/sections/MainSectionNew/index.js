import { FaInstagram, FaYoutube, FaTwitter, FaSpotify } from 'react-icons/fa';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './style.css';

function MainSectionNew({refSection}) {

    return (
        <div id="main-section" ref={refSection}>
            <img id='myVideo' src="/images/landing.png" alt="landing" />

            <div className='content'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6  main-section-content">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <h1 className='mb-4 font-weight-bold'>Singer<span className='montserrat'>-</span>Songwriter</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <h4 className='tagline mb-5'>
                                    <span className='montserrat'>"</span>I do music for the love of it, and that<span className='montserrat'>'</span>s about it.<span className='montserrat'>"</span>
                                </h4>
                            </AnimationOnScroll>


                            <div className="social-media-wrapper mt-5">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <a href="https://www.instagram.com/frizzell.dsouza" target="_blank" rel="noopener noreferrer" className='social-box '>
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
                                </AnimationOnScroll>
                            </div>

                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className='subscribe-form mt-lg-5 mt-md-5  mt-3'>
                                    
                                    {/* <a href="https://originaldog.in/profile/view/ETPzFKnvzHMHkEDSnTt9ynTUio63" target="_blank" rel="noreferrer">
                                        <button className='btn btn-primary btn-main-page mt-5'>Fund</button>
                                    </a> */}
                                    <a href='#subscribe'>
                                        <button className='btn btn-primary btn-main-page ml-1 mt-3 subscribe-button'>Subscribe</button>
                                    </a>
                                </div>
                            </AnimationOnScroll>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4 offset-md-1 offset-lg-1 main-section-content align-items-center' id='latest-release'>
                            <h4 className='outnow-heading mt-5'>OUT NOW</h4>
                            <img src="/images/music/hillsSquare.jpg" alt="hills" className='img-fluid mt-4' />
                            <h2 className='ltr-title mt-5'>The Hills Know Of You</h2>
                            <a href='https://streamlink.to/TheHillsKnowOfYou' target="_blank" className='btn btn-primary btn-main-page ml-1 mt-3 subscribe-button'>Listen Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSectionNew;