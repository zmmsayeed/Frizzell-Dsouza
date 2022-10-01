import React from "react";
import axios from "axios";
import moment from "moment";
import { Country, State, City } from "country-state-city";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//importing stylesheet
import "./style.css";

let countries = Country.getAllCountries();
let states = State.getAllStates();
let cities = City.getAllCities();
class Subscribe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      country: '',
      stateCity: [],
      stateSelected: '',
      citySelected: '',
      bdayMonth: '',
      bdayDay: '',
      bdayYear: '',
      error: '',
      loadingSub: false,
      countryStates: [],
      stateCities: [],
    };
  }

  setCountry = (event) => {

    let country = event.target.value;
    country = countries.filter(country => country.isoCode === event.target.value)[0];

    let countryStates = states.filter(state => state.countryCode === event.target.value);
    if (countryStates.length === 0) {
      country = countries.filter(country => (country.name).toLowerCase() === (event.target.value).toLowerCase())[0]
      countryStates = states.filter(state => state.countryCode === country.isoCode);
    }

    // SORTING STATES ALPHABETICALLY
    countryStates = countryStates.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      country: country.isoCode,
      countryStates: countryStates
    });
  }

  changeState = (event) => {
    let selectedState = states.filter(state => state.name === event.target.value)[0];
    let stateCities = cities.filter(city => city.stateCode === selectedState.isoCode);

    // SORTING CITIES ALPHABETICALLY
    stateCities = stateCities.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      stateCities: stateCities,
      stateSelected: event.target.value
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  subscribeUser = () => {

    if (this.state.name === '') {
      this.setState({
        error: 'Please enter your full name.'
      });
    }

    let isEmailValid = isValidEmail(this.state.email);
    if (!isEmailValid) {
      this.setState({
        error: "Please enter a valid email address"
      });
      return;
    }

    if (this.state.country === '' || this.state.stateSelected === '' || this.state.citySelected === '') {
      this.setState({
        error: "Please select a country, state, and city."
      });
      return;
    }

    if (this.state.bdayMonth === '' || this.state.bdayDay === '' || this.state.bdayYear === '') {
      this.setState({
        error: "Please enter your birthday."
      });
      return;
    } else {
      // get present year
      let presentYear = moment().format("YYYY");
      if (this.state.bdayYear > presentYear || (this.state.bdayDay).length > 2 || (this.state.bdayYear).length > 4) {
        this.setState({
          error: "Please enter a valid birthday."
        });
        return;
      }
    }

    this.setState({
      error: '',
    }, () => {
      axios.get('https://5l1k0zjn2m.execute-api.ap-south-1.amazonaws.com/test/subscribe?email='+ this.state.email  + '&birthdayDay=' + this.state.bdayDay + '&birthdayMonth=' + this.state.bdayMonth + '&birthdayYear=' + this.state.bdayYear  + '&city=' + this.state.citySelected  + '&country=' + this.state.country  + '&state=' + this.state.stateSelected + '&name=' + this.state.name)
      .then(response => {
        // console.log('Response: ', response);
        if (response.status === 200) {
          this.setState({
            loadingSub: true,
          });
        }
      }).catch(err => {
        console.log("Error: ", err.response.data);
        this.setState({
          error: "You are already subscribed.",
          loadingSub: true
        });
      })
    });
  }

  render() {
    let months = moment.months();

    // console.log(cities);

    return (
      <div id="subscribe" className="subscribe" ref={this.props.refSection}>

        <div className={this.state.loadingSub ? "container-fluid" : "container-fluid d-none"}>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4">

              <h3 className={this.state.error === '' ? "d-block text-center mb-4" : "d-none"}>
                Thank you for joining my community<span className="montserrat">!</span>
              </h3>
              <h4 className={this.state.error === '' ? "d-block text-center" : "d-none"}>
                PS<span className="montserrat">:</span> Your inbox has something waiting for you<span className="montserrat">.</span><br />Check your spam folder if you don<span className="montserrat">'</span>t see it yet<span className="montserrat">.</span>
              </h4>
              <h3 className="text-center">{this.state.error}</h3>
            </div>
          </div>
        </div>

        <div className={this.state.loadingSub ? "container-fluid d-none" : "container-fluid"}>
          
          <div className="row">
            <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h3>
                  Subscribe and Follow To Get Updates From Frizzell D
                  <span className="montserrat">'</span>Souza
                </h3>
              </AnimationOnScroll>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-4">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h5>Name</h5>
                <input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter Your Full Name" />
              </AnimationOnScroll>
              
            </div>
            <div className="col-md-2 col-lg-2 col-12  mt-4">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h5>Email Address</h5>
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Enter Your Email Address" />
              </AnimationOnScroll>
            </div>
          </div>

          <div className="row">

              <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h5>Country</h5>
                <input type="text" list="count" name="country" id="country" onChange={this.setCountry} placeholder="Select Country" autoComplete="off" />
                <datalist id="count" autoComplete="off">
                  <option value="" selected disabled>
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </datalist>
                </AnimationOnScroll>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-4">
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h5>
                  State
                </h5>
                <select name="stateSelected" id="country" onChange={this.changeState}>
                  <option value="" selected disabled>
                    Select State
                  </option>
                  {
                    this.state.countryStates.map((stateCity) => (
                      <option key={stateCity.isoCode} value={stateCity.name}>{stateCity.name}</option>
                    ))  
                  }
                </select>
                </AnimationOnScroll>
              </div>

              <div className="col-md-2 col-lg-2 col-12  mt-4">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <h5>
                    City
                  </h5>
                  <select name="citySelected" id="city" onChange={this.onChange}>
                    <option value="N/A">N/A</option>
                    <option value="" selected disabled>
                      Select City
                    </option>
                    {
                      this.state.stateCities.map((city) => (
                        <option key={city.name} value={city.name}>{city.name}</option>
                      ))  
                    }
                  </select>
                </AnimationOnScroll>
              </div>
            </div>
            
            <div className="row">

              <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <h5>Birthday</h5>
                </AnimationOnScroll>
              </div>
              <div className="col-4"></div>

              <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-2">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <select name="bdayMonth" id="month"  onChange={this.onChange}>
                    <option value="" selected disabled>
                      Month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={index+1}>
                        {month}
                      </option>
                    ))}
                  </select>
                </AnimationOnScroll>
              </div>
              <div className="col-md-1 col-lg-1 col-12 mt-2">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <input name="bdayYear" value={this.state.bdayYear} type="number" placeholder="Year" onChange={this.onChange} />
                </AnimationOnScroll>
              </div>
              <div className="col-md-1 col-lg-1 col-12 mt-2">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <input name="bdayDay" value={this.state.bdayDay} type="number" placeholder="Day" onChange={this.onChange} />
                </AnimationOnScroll>
              </div>
            </div>

            <div className="row">

              <div className={
                this.state.error !== ''
                  ? "col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4"
                  : "col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4 d-none"
              }>
                <div className="alert alert-danger" role="alert">
                  {this.state.error}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-5">
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <button className="btn btn-primary btn-block" onClick={this.subscribeUser}>Subscribe</button>
                </AnimationOnScroll>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
