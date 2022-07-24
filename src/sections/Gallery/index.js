import './style.css';

function Gallery({refSection}) {
    return (
        <div id='gallery' ref={refSection}>
            <div className='container'>
                <h2 className="mb-5">Gallery</h2>

                <div className='row'>
                    <div className='col-6 col-lg-4 col-md-4 mb-3 img-holder'>
                        <img src='/images/Gallery/1.jpg' className='img-fluid' />
                    </div>
                    <div className='col-6 col-md-4 mb-3 img-holder'>
                        <img src='/images/Gallery/2.jpg' className='img-fluid' />
                    </div>
                    <div className='col-6 col-md-4 mb-3 img-holder'>
                        <img src='/images/Gallery/3.jpg' className='img-fluid' />
                    </div>
                    <div className='col-6 col-md-4 mb-3 img-holder'>
                        <img src='/images/Gallery/4.jpg' className='img-fluid' />
                    </div>
                    <div className='col-6 col-md-4 mb-3 img-holder'>
                        <img src='/images/Gallery/6_1.jpg' className='img-fluid' />
                    </div>
                    <div className='col-6 col-md-4 mb-3 img-holder'>
                        <img src='/images/Gallery/5_1.jpg' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;