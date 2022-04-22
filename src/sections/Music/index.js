import { useState } from "react";
import { Drawer } from "antd";

// importing icons
import { FaPlayCircle, FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

// importing stylesheet
import "./style.css";

function Music({refSection}) {
  const [visible, setVisible] = useState(false);
  const [song, setSong] = useState("");
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
      exclusive: false,
    },
    {
      name: "Drown Away",
      sub: "Single",
      image: "/images/music/Drown_vinyl.png",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Foolish Once Again",
      sub: "Single",
      image: "/images/music/foolish_vinyl.png",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Fall",
      sub: "Single",
      image: "/images/music/Fall_vinyl.png",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
    },
  ];

  return (
    <div id="music" ref={refSection}>
      <Drawer
        title={song}
        placement="bottom"
        onClose={onClose}
        visible={visible}
        closable
      >
        <div className="drawer-div">
          <a href={selectedSong.apple} className="music-link">
            <FaApple size={100} style={{ color: "#000000" }} />
          </a>
          <a href={selectedSong.yt} className="music-link">
            <FaYoutube size={100} style={{ color: "#FF0000" }} />
          </a>
          <a href={selectedSong.spotify} className="music-link">
            <FaSpotify size={100} style={{ color: "#1DB954" }} />
          </a>
        </div>
      </Drawer>

      <div className="container py-5">
        <h1 className="mb-5">Music</h1>

        <div className="row">
          {musicArr.map((music, index) => (
            <div className="col-md-3" key={index}>
              <div className="card" onClick={() => showDrawer(music)}>
                <div className="dropdown">
                  <div className="dropbtn">
                    <img
                      className="card-img-top"
                      src={music.image}
                      alt="Card cap"
                    />
                    <p className="mb-0 mt-2 music-title">{music.name} |</p>
                    <p className="mb-0 music-title">{music.sub}</p>
                  </div>
                  <div className="dropdown-content">
                    {music.exclusive ? (
                      <>
                        <p>Available exclusively on</p>
                        <a href="#" className="mb-2">
                          <img
                            src="/images/audious.png"
                            alt="spotify"
                            width="40px"
                          />
                        </a>
                      </>
                    ) : (
                      <>
                        <p className="mb-2">Listen on</p>
                        <a href="#" className="mb-2">
                          <img
                            src="/images/spotify.png"
                            alt="spotify"
                            width="20px"
                          />
                        </a>
                        <a href="##" className="mb-2">
                          <img
                            src="/images/apple.png"
                            alt="spotify"
                            width="20px"
                          />
                        </a>
                        <a href="###" className="mb-2">
                          <img
                            src="/images/amazon.png"
                            alt="spotify"
                            width="40px"
                          />
                        </a>
                        <a href="####" className="mb-2">
                          <img
                            src="/images/youtube.png"
                            alt="spotify"
                            width="25px"
                          />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Music;
