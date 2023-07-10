import { useState } from 'react';
import './style.css';

function Navbar({activeSection}) {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () =>{
    if(window.scrollY >= 80){
      setColorChange(true);
    }
    else{
      setColorChange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  // console.log(activeSection)

  return (
    <>
      <nav className={ 
        colorChange ? 
          activeSection === 'about'
          ? "navbar navbar-expand-lg p-0 navbar-dark bg-dark bg-contact fixed-top px-md-4 px-lg-4"
          : activeSection === 'contact'
          ? "navbar navbar-expand-lg p-0 navbar-dark bg-dark bg-translucent fixed-top px-md-4 px-lg-4"
          : activeSection === 'subscribe'
          ? "navbar navbar-expand-lg p-0 navbar-dark bg-dark bg-subscribe fixed-top px-md-4 px-lg-4"
          : "navbar navbar-expand-lg p-0 navbar-dark bg-dark fixed-top px-md-4 px-lg-4"
        :"navbar navbar-expand-lg  p-0 navbar-dark bg-transparent fixed-top px-md-4 px-lg-4" }>
        <div className='container-fluid'>
          {/* <a className="navbar-brand" href="#">Frizzell D<span className='montserrat'>'</span>Souza</a> */}
          <a className="navbar-brand" href="#">
            {
              activeSection === 'about'
              ?<img src="/images/logo/logo_white.png" alt="Frizzell D'Souza" width="180px" />
              :<img src="/images/logo/logo_white.png" alt="Frizzell D'Souza" width="180px" />
            }
            
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={activeSection === "mainSection" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className={activeSection === "music" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#music">Music</a>
              </li>
              <li className={activeSection === "subscribe" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#subscribe">Subscribe</a>
              </li>
              <li className={activeSection === "about" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className={activeSection === "watch" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#watch">Watch</a>
              </li>
              <li className={activeSection === "gallery" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#gallery">Gallery</a>
              </li>
              <li className={activeSection === "press" ? "nav-item active mr-md-4 mr-lg-4" : "nav-item mr-md-4 mr-lg-4"}>
                <a className="nav-link" href="#press">Press</a>
              </li>
              <li className={activeSection === "contact" ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
