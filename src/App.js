import React, { Component } from 'react';
import Form from './Compponent/Form';
import Weather from './Compponent/Weather';

const API_KEY = "c04a06255e9ffd3fac8a0a49f286c0df";

class App extends Component {

  state = {
    humidity: '',
    temp: '',
    name: '',
    country: '',
    description: '',
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    if (city && country) {
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
      const data = await api.json();
      this.setState({
        humidity: data.main.humidity,
        temp: data.main.temp,
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
      })
    } else
      alert("Entr city and country")
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form_container">
          <Form getWeather={this.getWeather} />
          <Weather weather={this.state} />
        </div>
      </div>
    );
  }
}

export default App;