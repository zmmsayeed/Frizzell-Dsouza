import './style.css';

function Music() {
    return (
        <div id="music">
            <div className='container py-5'>
                <h1>Music</h1>

                <div className='music-list'>
                    <div className="music-item p-2">
                        <div className="row no-gutters">
                            <div className="col-1">
                                <img src="/images/music/New.jpeg" alt="Missing" className='img-fluid'/>
                            </div>
                            <div className="col">Info</div>
                            <div className="col">Other info</div>
                        </div>
                    </div>
                </div>

                <iframe src="https://open.spotify.com/embed/track/5fv2dx3jfxxX8Gqvzl6TjI?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    );
}

export default Music;