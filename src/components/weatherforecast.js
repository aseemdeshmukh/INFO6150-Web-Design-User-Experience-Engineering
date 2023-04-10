import React from "react";
import { Link } from "react-router-dom";
import HourwiseWeatherForecast from "./hourwiseforecast";

class Weatherforecast extends React.Component {

  
  state = {
    flag: false,
    selectedDate: undefined
  };

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  getHourwiseForecast(e) {
    this.setState({
      flag: !this.state.flag,
      hourwisetempdata: this.props.hourwiseForecast
    });
  }

  render() {

  var fullDate = this.props.time;
  console.log(fullDate);
  var date = fullDate.substring(8,10);
  var month = parseInt(fullDate.substring(5,7));
  var year = fullDate.substring(0,4);
  var weatherDesc = this.props.description;
  var minTemp = (this.props.temp_min ) ;
  var maxTemp = (this.props.temp_max );
  var temp = Math.round(this.props.temp * 10) /10;
  var months=['01', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'September', 'October', 'November', 'December'];
  
    return (

      <div className='main-daily'>
        <div className="daily" onClick={e => this.getHourwiseForecast(e)} >
          <div className="left-div">
            <Link to={`/weekly/${this.props.day}`}>
              <img
                src={this.props.icon}
                alt="weather icon"
              />

            </Link>
          </div>
          <div className="mid-div">
            <h4>{this.Capitalize(weatherDesc)}</h4>
            <p>{temp}°C</p>
          </div>
          <div className="right-div">

            <div className='date'>{months[month]} {date}, {year}</div>
            <div className='min-max'>{minTemp}°C / {maxTemp}°C</div>
          </div>
        </div>
        <div className='main-hourly'>
        {this.state.flag &&
          this.state.hourwisetempdata.map(entry => {
            return <HourwiseWeatherForecast hourwisetempdata={entry} />;
          })}
          </div>
      </div>
    );
  }
}

export default Weatherforecast;
