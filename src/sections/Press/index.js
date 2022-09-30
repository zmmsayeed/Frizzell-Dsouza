import './style.css';

function Press({refSection}) {
    return (
        <div ref={refSection}>
            <div id="press">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-9">
                            <div className='press-container'>
                                <h2 className="mb-md-5 mb-lg-5 mb-4 press-heading">In The Press</h2>

                                <div className='row mt-md-5 mt-lg-5 text-center'>
                                    <div className='col-4 col-md-3 col-lg-3 offset-md-1 offset-lg-1'>
                                        <a href='https://www.thehindu.com/entertainment/music/mangaluru-singer-frizzell-dsouzas-latest-single-foolish-once-again-a-love-ballad/article34738014.ece' target={'_blank'}>
                                            <img src='/images/press/thehindu.png' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='col-4 col-md-3  col-lg-3 offset-md-1 offset-lg-1'>
                                        <a href='' target={'_blank'}>
                                            <img src='/images/press/toi.png' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='col-4 col-md-2 col-lg-2 offset-md-1 offset-lg-1'>
                                        <a href='' target={'_blank'}>
                                            <img src='/images/press/bg.png' className='img-fluid' />
                                        </a>
                                    </div>
                                </div>

                                <div className='row text-center'>
                                    <div className='col-6 col-md-4 col-lg-3 offset-md-2'>
                                        <a href='https://rollingstoneindia.com/tag/frizzell-dsouza/' target={'_blank'}>
                                            <img src='/images/press/rollingstones.png' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='col-6 col-md-4 offset-md-1 offset-lg-1 col-lg-3'>
                                        <a href='' target={'_blank'}>
                                            <img src='/images/press/spring.png' className='img-fluid' />
                                        </a>
                                    </div>
                                </div>
                                <div className='row text-center mt-4'>
                                    <div className='col-4 col-md-3 col-lg-3 mt-0 mt-md-3 mt-lg-3 offset-md-1 offset-lg-1'>
                                        <a href='https://www.platform-mag.com/music/frizzell-dsouza.html' target={'_blank'}>
                                            <img src='/images/press/platform.jpg' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='col-4 col-md-3 offset-md-1 offset-lg-1 col-lg-3'>
                                        <a href='https://homegrown.co.in/article/805438/homegrowns-picks-from-music-last-week-hari-sukhmani-frizzell-dsouza-punk-on-toast-more' target={'_blank'}>
                                        <img src='/images/press/homegrown.png' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='col-4 col-md-3 offset-md-1 offset-lg-1 col-lg-3'>
                                        <a href='https://www.radiocity.in/indie/news/women-of-indie-meet-these-8-homegrown-artists-who-redefine-independent-music--129' target={'_blank'}>
                                            <img src='/images/press/radiocity.png' className='img-fluid' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 bg-dark press-read-section">
                            <div className='press-read mb-4'>
                                <img src='/images/press/hummingheart.png' className='img-fluid mb-3' width={'150px'} />
                                <h5>Frizzell D’Souza – Just As Easily</h5>

                                <p>Bangalore-based singer-songwriter Frizzell D’Souza has been releasing singles for about two years now and her latest release, and second one this year, is a piece of breezy beauty. Insistent and yearning in all the right proportions, it would be unsurprising if D’Souza deemed ‘Just As Easily’ to be most representative of her oeuvre.</p>

                                <p>The best of love songs fail to work without candour, and ‘Just As Easily’ is astutely aware of this datum. “I’m naive, and I’m silly” is quite aptly the refrain of a song that has, with notable adeptness, mastered the art of rhythmic longing...</p>
                            </div>

                            <div className='press-read'>
                                <img src='/images/press/rollingstones.png' className='img-fluid mb-3' width={'150px'} />

                                <h5>Singer-Songwriter Frizzell D’Souza Presents a Neatly Wrapped Country Blues Offering ‘New’</h5>
                                <p>Mangaluru/Bengaluru singer-songwriter Frizzell D’Souza’s earliest memory of music is listening to old retro hits in her father’s car as a toddler. As a child, she was enrolled in violin lessons and soon picked up the guitar, piano and even ukulele. Throughout her schooling, the musician sang in choir groups, but it wasn’t until 2017 when she moved from Mangaluru to Bengaluru to pursue an undergrad from RV College of Architecture that she began singing solo.</p>

                                <p>From posting covers to YouTube for the better part of three years, D’Souza only began writing her own music this past January and is now out with her debut country blues single “New.”</p>

                                <p>The musician says, “One quarantine evening, in March, a friend of mine asked if I was writing something new. The two words, ‘something new,’ sparked a narrative in my head, and lyrics and melodies began flowing! I would bunk my online classes whenever ideas would flow and, in a week, or two, ‘New’ was ready.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Press;