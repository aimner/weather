import React, { useEffect } from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";
import cities from "cities.json";
import { countries } from "countries-list";
import { currentWeather } from "./api/api";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

interface ICities {
  country: string;
  lat: string;
  lng: string;
  name: string;
}

function App() {
  useEffect(() => {
    const find = async () => {};

    // find();
  }, []);

  const citiesArr: ICities[] = cities as ICities[];

  const onChangeValue = async (str: string) => {
    console.log(citiesArr.filter((item) => item.name.includes(str)));
  };

  async function lol() {
    navigator.geolocation.getCurrentPosition(showPosition, geoError);

    function geoError(e: any) {
      console.log(e)
    }
    async function showPosition(position: GeolocationPosition) {
      console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
      // let a = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=53ce2eaf707ffa9d6e6ce83387ab2cbb&lang=en`
      // );
      // let b = await a.json();
      // console.log(b);
    }

    // ЭТО ДЛЯ ТЕКУЩЕЙ ПОГОДЫ
    // let a = await fetch(
    //   "https://api.openweathermap.org/data/2.5/weather?lat=53.9&lon=27.56667&units=metric&appid=53ce2eaf707ffa9d6e6ce83387ab2cbb&lang=en"
    //   "https://api.openweathermap.org/data/2.5/weather?q=Гродно&units=metric&appid=53ce2eaf707ffa9d6e6ce83387ab2cbb&lang=en"
    // );
    // let b = await a.json();
    // console.log(b);
    // console.log(b);
    // ЭТО НА 5 ДНЕЙ ВПЕРЁД ЧЕРЕЗ 3 ЧАСА
    // let a = await fetch(
    //   "https://api.openweathermap.org/data/2.5/forecast?q=Гродно&units=metric&appid=53ce2eaf707ffa9d6e6ce83387ab2cbb&lang=en"
    // );
    // let b = await a.json();
    // console.log(b);
  }

  lol();

  return (
    <div className={classes.app}>
      <input type="text" onChange={(e) => onChangeValue(e.target.value)} />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
