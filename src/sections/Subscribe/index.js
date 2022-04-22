import moment from "moment";
import { Country, State, City } from "country-state-city";
import "./style.css";

function Subscribe() {
  let months = moment.months();
  let countries = Country.getAllCountries()
  let states = State.getAllStates()
  let cities = City.getAllCities()
  let countryStateList = getCountryStateList(
    countries,
    states,
    cities
  );
  return (
    <div id="subscribe" className="subscribe">
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
          <input type="text" placeholder="Enter Your Email Address" />
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
          <select name="country" id="country">
            <option value="" selected disabled>
              Select Country
            </option>
            {
              countries.map((country, index) => (
                <option key={index} value={country.name}>{country.name}</option>
              ))  
            }
          </select>
        </div>
        <div className="col-md-2 col-lg-2 col-12 mt-2">
          <select name="country" id="country">
            <option value="" selected disabled>
              Select State/City
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          {/* <input type="text" placeholder="Select a country/region" /> */}
        </div>

        <div className="col-4"></div>

        <div className="col-md-4 col-lg-4 col-12 offset-md-4 offset-lg-4 mt-4">
          <h5>Birthday</h5>
        </div>
        <div className="col-4"></div>

        <div className="col-md-2 col-lg-2 col-12 offset-md-4 offset-lg-4 mt-2">
          <select name="month" id="month">
            <option value="" selected disabled>
              Month
            </option>
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-1 col-lg-1 col-12 mt-2">
          <input type="number" placeholder="Year" />
        </div>
        <div className="col-md-1 col-lg-1 col-12 mt-2">
          <input type="number" placeholder="Day" />
        </div>

        <div className="col-4"></div>
      </div>
    </div>
  );
}

function getCountryStateList(countries, states, city) {}

export default Subscribe;
