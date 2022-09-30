import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaPlayCircle } from 'react-icons/fa';
// importing stylesheet
import "./style.css";

function MusicNew({ refSection }) {
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
      year: 2020,
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
      year: 2020,
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
      year: 2021,
    },
    {
      name: "Fall",
      sub: "Single",
      image: "/images/music/fall.jpg",
      general: "https://audius.co/frizzelldsouza",
      yt: "google.com",
      spotify: "google.com",
      apple: "google.com",
      exclusive: true,
      year: 2022,
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
      year: 2022,
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
      year: 2020,
    },
  ];

  return (
    <div id="music" ref={refSection}>
      <div className="container py-5">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className='mb-4'>Music</h1>
        </AnimationOnScroll>

        <div className="row">
          <div className='col-12 col-md-5 w-100 col-lg-5 cssBox'>
            <div className='row leftMusicFocus p-4'>
              <div className='col-6 col-md-6 col-lg-5'>
                <img src="/images/music/hillsSquare.jpg" alt="The Hills Know Of You" className="img-fluid" />
              </div>
              <div className='col-6 col-md-6 col-lg-7'>
                <h5>The Hills Know Of You</h5>
                <p>Single</p>

                <a href="https://streamlink.to/TheHillsKnowOfYou" target="_blank" rel="noreferrer" className="btn focusMusicButton">Stream Here <FaPlayCircle /></a>
              </div>
            </div>

            <div className='row leftMusicFocus p-4 mt-4'>
              <div className='col-6 col-md-6 col-lg-5 pt-1'>
                <img src="/images/music/justaseasily.jpg" alt="Just As Easily" className="img-fluid" />
              </div>
              <div className='col-6 col-md-6 col-lg-7'>
                <h5>The Hills Know Of You</h5>
                <p>Single</p>

                <a href="https://streamlink.to/Just-As-Easily" target="_blank" rel="noreferrer" className="btn focusMusicButton">Stream Here <FaPlayCircle /> </a>
              </div>
            </div>
          </div>


          <div className='col-12 col-md-7 col-lg-7 w-100 cssBox'>
            <div className='row rightMusicFocus p-3'>

              {
                musicArr.map((music, ind) => {
                  return (
                    <div key={ind} className={ind===0 ? "row no-gutters eachMusic p-2" : "row no-gutters eachMusic p-2 mt-2"}>
                    {/* <div className='row no-gutters eachMusic p-2' key={ind}> */}
                      <div className="col-1 col-md-1 col-lg-1">
                        <img src={music.image} alt={music.name} className="img-fluid" />
                      </div>

                      <div className="col-5 col-md-5 col-lg-5">
                        <p className='mt-2 mb-0 ml-2'>{music.name}</p>
                      </div>

                      <div className="col-1 col-md-1 col-lg-1">
                        <p className='mt-2 mb-0'>{music.year}</p>
                      </div>

                      <div className="col-2 col-md-2 col-lg-2 text-center">
                        <p className='mt-2 mb-0'>{music.sub}</p>
                      </div>

                      <div className="col-3 col-md-3 col-lg-3 text-center">
                        <a href={music.general} target="_blank" rel="noreferrer" className='btn rightStreamButton mt-2'>
                          <small>Stream Here <FaPlayCircle /></small>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
              
              {/* <div className='row no-gutters eachMusic p-2'>
                <div className="col-1 col-md-1 col-lg-1">
                  <img src={musicArr[0].image} alt="" className="img-fluid" />
                </div>

                <div className="col-5 col-md-5 col-lg-5">
                  <p className='mt-2 mb-0 ml-2'>Foolish Once Again</p>
                </div>

                <div className="col-3 col-md-3 col-lg-3 text-center">
                  <p className='mt-2 mb-0'>2020 &nbsp;&nbsp; Single</p>
                </div>

                <div className="col-3 col-md-3 col-lg-3 text-center">
                  <button className='rightStreamButton mt-2'>
                    <small>Stream Here</small>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MusicNew;
