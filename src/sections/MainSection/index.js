import { useRef, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaSoundcloud } from 'react-icons/fa';
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
                            <h1 className='mb-4 font-weight-bold'>Singer - Songwriter</h1>
                            <h4 className='tagline'>
                                "I do music for the love of it, and that's about it."
                            </h4>


                            <div className="social-media-wrapper mt-5">
                                <a href="https://www.instagram.com/frizzell.dsouza" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaInstagram size={25} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCpDjYVQS411CBBw0thoB0Sw" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaYoutube size={28} />
                                </a>
                                <a href="https://twitter.com/toothpickyy" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaTwitter size={25} />
                                </a>
                                <a href="https://soundcloud.com/frizzelldsouza" target="_blank" rel="noopener noreferrer" className='social-box'>
                                    <FaSoundcloud size={35} />
                                </a>
                            </div>

                            <div className='subscribe-form mt-5'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form className="form-inline" action="/search" method="get">
                                            <div className="input-group flex-fill">
                                                <input type="email" name="subscribe" value=""
                                                    placeholder="Subsribe to get the latest updates" className="form-control subscribe-input" />
                                                <div className="input-group-append">
                                                    <input type="submit" name="commit" value="Subscribe" className="btn btn-primary subscribe-button" data-disable-with="Subscribe" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-12 col-md-6 col-lg-6 img-div">
                            <img src="/images/bg2.png" alt="" className='img-fluid' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;