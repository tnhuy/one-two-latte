import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		return(
		<TableRow>
			<TableRowColumn>{name}</TableRowColumn>
		</TableRow>
		);
	}
	render(){
		return(
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
		)
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);