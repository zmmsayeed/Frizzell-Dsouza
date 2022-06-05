// importing stylesheet
import "./style.css";

function Music({refSection}) {

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
      <div className="container py-5">
        <h1 className="mb-5">Music</h1>

        <div className="row">
          {musicArr.map((music, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
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
                          <img src="/images/spotify.png" alt="spotify" width="20px" />
                        </a>
                        <a href="##" className="mb-2">
                          <img src="/images/apple.png" alt="spotify" width="20px" />
                        </a>
                        <a href="###" className="mb-2">
                          <img src="/images/amazon.png" alt="spotify" width="40px" />
                        </a>
                        <a href="####" className="mb-2">
                          <img src="/images/youtube.png" alt="spotify" width="25px" />
                        </a>
                      </>
                    )}
                  </div>

                  {/* For Mobile design */}
                  <div className="mobile-listen mb-5">
                    <a href="#">
                      <img src="/images/spotify.png" alt="spotify" width="50px" />
                    </a>
                    <a href="##" className="ml-2">
                      <img src="/images/apple.png" alt="spotify" width="50px" />
                    </a>
                    <a href="###" className="ml-2">
                      <img src="/images/amazon.png" alt="spotify" width="75px" className="mt-3" />
                    </a>
                    <a href="####" className="ml-2">
                      <img src="/images/youtube.png" alt="spotify" width="45px" />
                    </a>
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
