import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import '../../css/App.css';
import { Tabs, Tab} from 'material-ui';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component{
	render(){
		return (
			<div className="App-header">
	          <div className="logo">
	            <div className="logo-img"><img src={logo} className="App-logo" alt="logo"/></div>
	            <div className="app-name"><h3>One 2 Latte</h3></div>
	          </div>
	          
	          <MuiThemeProvider>
	          	<Tabs>
		          <Tab label="Blog" containerElement={<Link to="/"/>} />
		          <Tab label="YouTube" />
		          <Tab label="Weather" containerElement={<Link to="/weather"/>} />
		        </Tabs>
		        </MuiThemeProvider>
	          
	        </div>
		);
	}
}

export default Header;