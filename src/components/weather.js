import React from "react";
import Weatherforecast from "./weatherforecast";
import Form from "./form";
const API_KEY = "571b3d9c970de6f4103d91d92b27bf56";

class Weather extends React.Component {
  state = {
    city: undefined,
    
    daywiseWeatherForecast: undefined,
    error: undefined
  };

  getWeatherForecast = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    var daywiseWeatherForecast = [];
    console.log(daywiseWeatherForecast);
    var imageApi = "https://openweathermap.org/img/w/";
    const data = await api_call.json();
    console.log(data);
    var weekdays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var hourwiseForecast = [];
    console.log(hourwiseForecast);

    if (city) {
      for (var i = 0; i <= 32; i = i + 8) {
        for (var j = i + 1; j < i + 7; j++) {
          hourwiseForecast.push({
            time: data.list[j].dt_txt.substring(0, 19),
            temp: data.list[j].main.temp,
            temp_min: data.list[j].main.temp_min,
            temp_max: data.list[j].main.temp_max,
            description: data.list[j].weather[0].description,
            icon: imageApi + data.list[j].weather[0].icon + ".png"
          });
        }
        daywiseWeatherForecast.push({
          day: weekdays[new Date((data.list[i].dt_txt.substring(0, 10))).getDay() + 1],
          time: data.list[i].dt_txt,
          temp: data.list[j].main.temp,
          temp_min: data.list[i].main.temp_min,
          temp_max: data.list[i].main.temp_max,
          description: data.list[i].weather[0].description,
          icon: imageApi + data.list[i].weather[0].icon + ".png",
          hourwiseForecast: hourwiseForecast
        });
        hourwiseForecast = [];
      }

      this.setState({
        city: data.city.name,
        country: data.city.country,
        daywiseWeatherForecast: daywiseWeatherForecast,
        error: ""
      });
    } 
    else {
      this.setState({
        city: undefined,
        country: undefined,
        daywiseWeatherForecast: undefined,
        error: "Empty fields"
      });
    }
  };
  render() {
    return (
      <div>
        <Form getWeatherForecast = {this.getWeatherForecast}/>
        {this.state.error && <p>{this.state.error}</p>}
        <div>
        {this.state.daywiseWeatherForecast && this.state.daywiseWeatherForecast.map(
            ({ day, time, temp, temp_min, temp_max, description, icon, hourwiseForecast }) => {
              return (
                <Weatherforecast
                  icon={icon}
                  day={day}
                  time={time}
                  temp={temp}
                  temp_min={temp_min}
                  temp_max={temp_max}
                  description={description}
                  hourwiseForecast={hourwiseForecast}
                />
              );
            }
          )}
          </div>
      </div>
    );
  }
}

export default Weather;
