import { useState } from 'react';
import { Drawer } from 'antd';

// importing icons
import { FaPlayCircle, FaApple, FaYoutube, FaSpotify } from 'react-icons/fa';

// importing stylesheet
import './style.css';

function Music() {

    const [visible, setVisible] = useState(false);
    const [song, setSong] = useState('');
    const [selectedSong, setSelectedSong] = useState({});
    
    const showDrawer = (music) => {
        setVisible(true);
        let str = music.name + " (" + music.sub + ")";
        setSong(str);
        setSelectedSong(music);
    };

    const onClose = () => {
        setVisible(false);
    };

    const musicArr = [
        {
            name: "New",
            sub: "Single",
            image: "/images/music/New_vinyl.png",
            yt: "google.com",
            spotify: "google.com",
            apple: "google.com",
        },
        {
            name: "Drown Away",
            sub: "Single",
            image: "/images/music/Drown_vinyl.png",
            yt: "google.com",
            spotify: "google.com",
            apple: "google.com",
        },
        {
            name: "Foolish Once Again",
            sub: "Single",
            image: "/images/music/foolish_vinyl.png",
            yt: "google.com",
            spotify: "google.com",
            apple: "google.com",
        },
        {
            name: "Fall",
            sub: "Single",
            image: "/images/music/Fall_vinyl.png",
            yt: "google.com",
            spotify: "google.com",
            apple: "google.com",
        },
    ]

    return (
        <div id="music">

            <Drawer title={song} placement="bottom" onClose={onClose} visible={visible} closable>
                <div className='drawer-div'>
                    <a href={selectedSong.apple} className='music-link'>
                        <FaApple size={100} style={{ color: '#000000' }}  /> 
                    </a>
                    <a href={selectedSong.yt} className='music-link'>
                        <FaYoutube size={100} style={{ color: '#FF0000' }} />
                    </a>
                    <a href={selectedSong.spotify} className='music-link'>
                        <FaSpotify size={100} style={{ color: '#1DB954' }} />
                    </a>
                </div>
            </Drawer>

            <div className='container py-5'>
                <h1 className='mb-5'>Music</h1>

                {/* <div className='row'>
                    {
                        musicArr.map((music, index) => (
                            <div className='col-md-3' key={index}>
                                <div class="card" onClick={() => showDrawer(music)}>
                                    <img class="card-img-top" src={music.image} alt="Card image cap" />
                                    <div className='music-info'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <FaPlayCircle size={65} className="playButton" />    
                                            </div>    
                                            <div className='col-md-9'>
                                                <p className='m-0 music-title'>{music.name}</p>
                                                <p className='song-info'>Single</p>    
                                            </div>   
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div> */}

                <div className='row'>
                    {
                        musicArr.map((music, index) => (
                            <div className='col-md-3' key={index}>
                                <div class="card" onClick={() => showDrawer(music)}>
                                    <img class="card-img-top" src={music.image} alt="Card cap" />
                                    <p className='mb-0 mt-2 music-title'>{music.name} |</p>
                                    <p className='music-title'>{music.sub}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Music;