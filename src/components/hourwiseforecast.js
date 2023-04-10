import React from "react";
// import './HourlyForecast.css';

class HourwiseWeatherForecast extends React.Component {
  render() {
    var time = this.props.hourwisetempdata.time;
    var hourTime = time.substring(11,16);
   var temp = Math.round(this.props.hourwisetempdata.temp * 10) /10;
    return (
      <div className="main-hourly">
        <div className='hourly'>
        <div>
        <p>{hourTime}</p>
          <img src={this.props.hourwisetempdata.icon} alt="" />
            <p>{temp}°C</p>
            <p> {this.props.hourwisetempdata.description}</p>
          </div>
          </div>
      </div>
    );
  }
}

export default HourwiseWeatherForecast;
