/* main weather function */
/*jshint esversion: 6 */
/*    
 *    WC4 Team Project
 *    Author: Emma Middleton, Joshua Knutson, Mobin Syed, Johan Elder
 *    Date: March 2, 2022
 */
let weather = {
    /*Get api from Openweathermap*/ 
    apiKey: "0c3f554666e84633449ac7415652fca1",
    fetchWeather: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&lang=Fr&appid=" + this.apiKey
      )
        .then((response) => {return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    /* main display for the weather */
    displayWeather: function (data) {
      const { icon, description } = data.weather[0];
      const { temp} = data.main;
      document.querySelector(".city").innerText = "Température à Montréal";
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    
  };
  weather.fetchWeather("Montreal");
