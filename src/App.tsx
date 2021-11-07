import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonthStatistic } from './pages/monthStatistic/MonthStatistic';
import { Header } from './shared/Header/Header';


function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/month-statistic" element={<MonthStatistic />} />
      </Routes>
    </div>
  );
}

export default App;
