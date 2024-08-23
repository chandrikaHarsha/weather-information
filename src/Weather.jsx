import { React, useState } from "react";
import axios from "axios";
function Weather() {
  const [cityWeather, setCityWeather] = useState([]);
  console.log(cityWeather);
  function data(e) {
    e.preventDefault();
    let cityName = e.target.cityName.value;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
    axios.get(API).then((result) => {
      setCityWeather([...cityWeather, result.data]);
    });
  }

  return (
    <div className="w-[1200px] bg-sky-400 mx-auto my-20 p-5 shadow-lg">
      <form onSubmit={data}>
        <input
          type="text"
          name="cityName"
          placeholder="Weather Today..."
          className="w-[50%] p-5 bg-slate-100 text-[20px] mr-20 outline-sky-500"
        />
        <input
          type="submit"
          value="Submit"
          className="border outline-none cursor-pointer text-white w-[150px] h-[50px] rounded-md font-semibold text-[20px]"
        />
      </form>
      <div className="container w-[100%] h-[100%]">
        {cityWeather.length > 0 ? (
          <div className="w-[100%] grid grid-cols-4 gap-5 p-10">
            {cityWeather.map((v, i) => {
              console.log(v.weather[0].icon);
              return (
                <>
                  <div
                    className="w-[250px] bg-sky-700 text-white p-5 mt-20 rounded-md"
                    key={i}
                  >
                    <div className="w-[100px] h-[100px] rounded-[50%]  bg-slate-300">
                      <img
                        src={`https://api.openweathermap.org/img/w/${v.weather[0].icon}`}
                        alt="weather img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="mt-5 px-4 text-[18px] capitalize">
                      City: {v.name}
                    </div>
                    <div className="mt-5 px-4 text-[18px]">
                      Temperature: {v.main.temp}
                    </div>
                    <div className="mt-5 px-4 text-[18px]">
                      Pressure: {v.main.pressure}
                    </div>
                    <div className="mt-5 px-4 text-[18px]">
                      Humidity: {v.main.humidity}
                    </div>
                    <div className="mt-5 px-4 text-[18px]">
                      Wind Speed: {v.wind.speed}
                    </div>
                    <div className="mt-5 px-4 text-[18px]">
                      Cloud: {v.clouds.all}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="my-5 text-[20px] text-white">
            Search weather of your city!
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
