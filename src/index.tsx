import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { Header } from './shared/Header/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <Provider store={store}>
          <Header />
          <App />
        </Provider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
