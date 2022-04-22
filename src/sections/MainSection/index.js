import { useRef, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaSpotify } from 'react-icons/fa';
import './style.css';

function MainSection() {
    const vidRef=useRef();

    useEffect(() => { vidRef.current.play(); },[]);

    return (
        <div id="main-section">
            <video autoplay muted loop id="myVideo" ref={ vidRef }>
                <source src="/videos/FOA1.mp4" type="video/mp4" />
            </video>

            <div className='content'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6  main-section-content">
                            <h1 className='mb-4 font-weight-bold'>Singer<span className='montserrat'>-</span>Songwriter</h1>
                            <h4 className='tagline'>
                                "I do music for the love of it, and that's about it."
                            </h4>


                            <div className="social-media-wrapper mt-5">
                                <a href="https://www.instagram.com/frizzell.dsouza" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaInstagram size={30} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCpDjYVQS411CBBw0thoB0Sw" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaYoutube size={35} />
                                </a>
                                <a href="https://twitter.com/toothpickyy" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaTwitter size={30} />
                                </a>
                                <a href="https://soundcloud.com/frizzelldsouza" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaSpotify size={30} />
                                </a>
                            </div>

                            <div className='subscribe-form mt-5'>
                                <button className='btn btn-primary btn-main-page mt-5'>Fund</button>
                                <button className='btn btn-primary btn-main-page ml-5 mt-5'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;