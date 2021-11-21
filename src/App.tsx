import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { DetailedWeekForecast } from './pages/detailedWeekForecast/DetailedWeekForecast';
import { Header } from './shared/Header/Header';
import { useDispatch } from 'react-redux';
import { LocationService } from './services/LocationService';
import { WeatherService } from './services/WeatherService';
import { AppDispatch } from './store/store';


function App() {

  const dispatch = useDispatch<AppDispatch>();
 
  useEffect(() => {
      (async () => {

          let location = await dispatch(LocationService.getCurrentLocation());
          await dispatch(LocationService.getCountryCities(location.country));
          await dispatch(WeatherService.getCurrentWeather(location.coord));
          await dispatch(WeatherService.getWeekWeather(location.coord));
          await dispatch(WeatherService.getHourlyWeather(location.coord));

      })();
  }, [])
  
  return (
    <div className="appContainer">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/detailed-week-forecast" element={<DetailedWeekForecast />} />
      </Routes>
    </div>
  );
}

export default App;
