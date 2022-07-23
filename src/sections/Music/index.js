// importing stylesheet
import "./style.css";

function Music({ refSection }) {
  const musicArr = [
    {
      name: "New",
      sub: "Single",
      image: "/images/music/New.jpg",
      general: "https://fanlink.to/frizzelldsouzanew",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Drown Away",
      sub: "Single",
      image: "/images/music/Drown Away.jpg",
      general: "https://streamlink.to/Drown_Away",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Foolish Once Again",
      sub: "Single",
      image: "/images/music/FoolishOnceAgain.jpg",
      general: "https://streamlink.to/FoolishOnceAgain",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Fall",
      sub: "Single",
      image: "/images/music/Fall_New.jpg",
      general: "https://audius.co/frizzelldsouza",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
    },
    {
      name: "Ill At Ease",
      sub: "Featured",
      image: "/images/music/ill.png",
      general: "https://linktr.ee/illatease",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
    },
    {
      name: "Jaded",
      sub: "Featured",
      image: "/images/music/jaded.jpg",
      general: "https://fanlink.to/FdJaded",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
    },
  ];

  return (
    <div id="music" ref={refSection}>
      <div className="container py-5">
        <h1>Music</h1>

        <div className="row">
          {musicArr.map((music, index) => {
            let leftShift = index % 3 === 0;
            let topMargin = index > 2;

            let musicDivClass = "col-md-3 col-lg-3 p-4";
            if (!leftShift) {
              musicDivClass += " offset-md-1 offset-lg-1";
            }
            if (topMargin) {
              musicDivClass += " mt-2";
            }

            return (
              <div key={index} className={musicDivClass} >
                <a href={music.general} target="_blank">
                  <div className="card">
                    <div className="dropdown">
                      <div className="dropbtn">
                        <img className="card-img-top" src={music.image} alt={music.name} />
                        {/* <p className="mb-0 mt-2 music-title text-center">
                          <b>{music.name}</b> <span className='montserrat'>|</span> {music.sub}
                        </p> */}
                        <p className="mb-0 mt-2 music-title text-center">
                          <b>{music.name}</b> <br /> <span className='montserrat'>{music.sub}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Old Design */}
        {/* <div className="row">
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

                  
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Music;
