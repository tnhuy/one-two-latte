import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import { connect } from 'react-redux';
import Charts from '../components/charts';
import GoogleMap from '../components/google_map';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './search_bar';
import Header from '../components/header';

const style = {
		height: 150,
		width:200,
}

const padding = {
	paddingTop: 50,
	textAlign: 'center'
}

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return(
			<TableRow key={name}>
				<TableRowColumn style={style}><GoogleMap lon={lon} lat={lat} /></TableRowColumn>
				<TableRowColumn>
					<Charts data={temps} color={"blue"} unit={"F"}/>
				</TableRowColumn>
				<TableRowColumn><Charts data={pressure} color={"red"} unit={"hPA"}/></TableRowColumn>
				<TableRowColumn><Charts data={humidity} color={"orange"} unit={"%"}/></TableRowColumn>
			</TableRow>
		);
	}
	render(){
		return(
			<div>
				<Header />
				<div style={padding}>
					<MuiThemeProvider>
						<SearchBar  />
					</MuiThemeProvider>
					<MuiThemeProvider>
						<Table>
						    <TableHeader>
						      <TableRow>
						        <TableHeaderColumn>City</TableHeaderColumn>
						        <TableHeaderColumn>Temperature</TableHeaderColumn>
						        <TableHeaderColumn>Pressure</TableHeaderColumn>
						        <TableHeaderColumn>Humidity</TableHeaderColumn>
						      </TableRow>
						    </TableHeader>
						    <TableBody>
						    	{this.props.weather.map(this.renderWeather)}
						    </TableBody>
						</Table>
					</MuiThemeProvider>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);