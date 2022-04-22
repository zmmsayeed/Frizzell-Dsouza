import { useState } from 'react';
import { websiteLogoText } from '../../constants';
import './style.css';

function Navbar() {
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

  return (
    <>
      <nav className={ colorChange ? "navbar navbar-expand-lg p-md-4 p-lg-4 p-0 navbar-dark bg-dark fixed-top" : "navbar navbar-expand-lg p-md-4 p-lg-4 p-0 navbar-dark bg-transparent fixed-top"  }>
         {/* className="navbar navbar-expand-lg p-md-4 p-lg-4 p-0 navbar-dark bg-dark fixed-top"> */}
        <div className='container'>
          <a className="navbar-brand" href="#">Frizzell D<span className='montserrat'>'</span>Souza</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#music">Music</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#subscribe">Subscribe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#watch">Watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#press">Press</a>
              </li>
              <li className="nav-item">
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
