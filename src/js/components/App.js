import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import '../../css/App.css';
import SearchBar from '../../js/containers/search_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherList from '../containers/weather_list';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to One 2 Latte</h2>
        </div>
        <MuiThemeProvider>
          <SearchBar/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <WeatherList/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
