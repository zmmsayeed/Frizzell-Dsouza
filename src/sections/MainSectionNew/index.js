import { FaInstagram, FaYoutube, FaTwitter, FaSpotify,} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './style.css';

function MainSectionNew({refSection}) {

    return (
        <div id="main-section-new" ref={refSection}>

            <div className='content'>
                <div className="container-fluid p-md-5 p-lg-5 p-3">
                    <div className="row p-0 p-lg-5 p-md-5">
                        <div className="col-12 col-md-6 col-lg-6 d-md-flex d-lg-flex d-block pb-5 align-items-end order-2 order-md-1 order-lg-1 text-md-left text-lg-left text-center">
                            <div className="mt-5">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <a href='#subscribe' className='d-block btn btn-primary btn-main-page ml-1 mt-3 mb-4 subscribe-button'>Subscribe for Updates</a><br />
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
                                    <a href="https://www.facebook.com/frizzelldsouzamusic" target="_blank" rel="noopener noreferrer" className='social-box'>
                                        <BsFacebook size={30} />
                                    </a>
                                </AnimationOnScroll>
                            </div>

                        </div>

                        <div className='col-12 col-md-3 col-lg-3 offset-lg-2 offset-md-2 mt-md-5 mt-lg-5 mt-0 p-4 text-center order-lg-2 order-md-2 order-1'>
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <h2 className='outnow-heading'>
                                    New <span className="montserrat">-</span> Acoustic<br/>
                                    <span className="montserrat">(</span>Official Music Video<span className="montserrat">)</span>
                                </h2>

                                <h3 className='font-weight-bold mt-5 mb-5'>OUT NOW</h3>

                                <a href='https://youtu.be/umnXsbn9R1c?si=3Q4H76G-DnDJxs5u' 
                                    target='_blank' className='btn-watch btn btn-primary btn-main-page mt-3 w-auto'
                                >
                                    <FaYoutube className='mr-2 mb-1'/>
                                    Watch Here                                
                                </a>

                                <h4 className='mt-5 outnow-heading'>Stream new <span className="montserrat">-</span> Acoustic</h4>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSectionNew;