import { AnimationOnScroll } from 'react-animation-on-scroll';
// importing stylesheet
import "./style.css";

function Music({ refSection }) {
  const musicArr = [
    {
      name: "New",
      sub: "Single",
      image: "/images/music/New_1.jpg",
      general: "https://fanlink.to/frizzelldsouzanew",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Drown Away",
      sub: "Single",
      image: "/images/music/Drown.jpg",
      general: "https://streamlink.to/Drown_Away",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Foolish Once Again",
      sub: "Single",
      image: "/images/music/Foolish.jpg",
      general: "https://streamlink.to/FoolishOnceAgain",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: false,
    },
    {
      name: "Fall",
      sub: "Single",
      image: "/images/music/Fall.jpg",
      general: "https://audius.co/frizzelldsouza",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
    },
    {
      name: "Ill At Ease",
      sub: "Featured",
      image: "/images/music/ill_new.png",
      general: "https://linktr.ee/illatease",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
    },
    {
      name: "Jaded",
      sub: "Featured",
      image: "/images/music/jaded_new.jpg",
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
        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className="offset-md-1 offset-lg-1">Music</h1>
        </AnimationOnScroll>

        <div className="row">
          {musicArr.map((music, index) => {
            let leftShift = index % 3 === 0;
            let topMargin = index > 2;

            let musicDivClass = "col-6 col-md-3 col-lg-3 p-3 p-md-4 p-lg-4 offset-md-1 offset-lg-1";
            if (leftShift) {
              musicDivClass += " offset-md-1 offset-lg-1";
            }
            if (topMargin) {
              musicDivClass += " mt-0 mt-md-2 mt-lg-2";
            }

            return (
              
              <div key={index} className={musicDivClass} >
                <AnimationOnScroll animateIn="animate__fadeIn">
                <a href={music.general} target="_blank" rel="noreferrer">
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
                </AnimationOnScroll>
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
