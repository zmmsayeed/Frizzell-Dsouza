import React from "react";
import axios from "axios";
import moment from "moment";
import { Country, State, City } from "country-state-city";
import "./style.css";

let countries = Country.getAllCountries();
let states = State.getAllStates();
let cities = City.getAllCities();

class Subscribe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      country: '',
      stateCity: [],
      stateCitySelected: '',
      bdayMonth: '',
      bdayDay: '',
      bdayYear: '',
      error: '',
      loadingSub: false
    };
  }

  setCountry = (event) => {

    let countryStates = states.filter(state => state.countryCode === event.target.value);
    let countryCities = cities.filter(city => city.countryCode === event.target.value);

    let newArr = [];

    countryStates.forEach(state => {
      countryCities.forEach(city => {
        if (state.isoCode === city.stateCode) {
          let newObj = {
            stateCode: state.isoCode,
            stateName: state.name,
            city: city.name,
            value: state.name + " / " + city.name
          }

          newArr.push(newObj);
        }
      })
    })

    this.setState({
      country: event.target.value,
      stateCity: newArr
    });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  subscribeUser = () => {
    console.log("subscribeUser");

    let isEmailValid = isValidEmail(this.state.email);
    if (!isEmailValid) {
      this.setState({
        error: "Please enter a valid email address"
      });
      return;
    }

    if (this.state.country === '' || this.state.stateCitySelected === '') {
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
      axios.get('https://5l1k0zjn2m.execute-api.ap-south-1.amazonaws.com/test/subscribe?email='+ this.state.email  + '&birthdayDay=06&birthdayMonth=12&birthdayYear=1995&city=Bangalore&country=India&state=Karnataka')
      .then(response => {
        console.log('Response: ', response);
        if (response.status == 200) {
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
    
    // let countryStateList = getCountryStateList(countries, states, cities);

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
              <h3>
                Subscribe and Follow To Get Updates From Frizzell D
                <span className="montserrat">'</span>Souza
              </h3>
            </div>

            <div className="col-4"></div>
            
              <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4">
                <h5>Email Address</h5>
              </div>

              <div className="col-4"></div>

              <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-2">
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Enter Your Email Address" />
              </div>

              <div className="col-4"></div>

              <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-4">
                <h5>Country</h5>
              </div>
              <div className="col-md-2 col-lg-2 col-12 mt-4">
                <h5>
                  State <span className="montserrat">/</span> City
                </h5>
              </div>

              <div className="col-4"></div>

              <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-2">
                <select
                  name="country"
                  id="country"
                  onChange={this.setCountry}
                >
                  <option value="" selected disabled>
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2 col-lg-2 col-12 mt-2">
                <select name="stateCitySelected" id="country" onChange={this.onChange}>
                  <option value="" selected disabled>
                    Select State/City
                  </option>
                  {
                    this.state.stateCity.map((stateCity, index) => (
                      <option key={index} value={stateCity.value}>{stateCity.value}</option>
                    ))  
                  }
                </select>
              </div>

              <div className="col-4"></div>

              <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4">
                <h5>Birthday</h5>
              </div>
              <div className="col-4"></div>

              <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-2">
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
              </div>
              <div className="col-md-1 col-lg-1 col-12 mt-2">
                <input name="bdayYear" value={this.state.bdayYear} type="number" placeholder="Year" onChange={this.onChange} />
              </div>
              <div className="col-md-1 col-lg-1 col-12 mt-2">
                <input name="bdayDay" value={this.state.bdayDay} type="number" placeholder="Day" onChange={this.onChange} />
              </div>

              <div className="col-4"></div>

              <div className={
                this.state.error !== ''
                  ? "col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4"
                  : "col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4 d-none"
              }>
                <div className="alert alert-danger" role="alert">
                  {this.state.error}
                </div>
              </div>

              <div className="col-4 offset-md-4 offset-lg-4 mt-5">
                <button className="btn btn-primary btn-block" onClick={this.subscribeUser}>Subscribe</button>
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
