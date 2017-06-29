import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

const style = {
  margin: 12,
};
const textField = {
	width: 300
}
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render() {
		return(
			<div>
			<form onSubmit={this.onFormSubmit}>
				<TextField
	      			hintText="Search..."
	      			floatingLabelText="Search five-day forecast for your city"
	      			value={this.state.term}
	      			onChange={this.onInputChange}
	      			style={textField}
	    		/>
	    		<RaisedButton type="submit" label="Primary" primary={true} style={style} />
    		</form>
    		</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);