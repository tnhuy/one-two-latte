import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../css/App.css';
import Header from '../components/header';

const style = {
	padding: 40,
	textAlign: 'center'
}

const label = {
	textAlign: 'left'
}

const button = {
	margin:20
}

class PostsNew extends Component {
	renderField(field){
		return (
			<div>
				<div style={label}><label>{field.label}</label></div>
				<MuiThemeProvider>
				<TextField
					{...field.input}
		      		hintText="Title..."
		      		floatingLabelText="Enter new Blog Title"
		      		fullWidth={true}
		    	/>
		    	</MuiThemeProvider>
		    	{field.meta.errors}
	    	</div>
		);
	}
	onSubmit (values) {
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});

	}

	render(){
		const {handleSubmit} = this.props;
		return (
			<div>
			<Header />
				<div style={style}>
					<h2>New Blog Entry</h2>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field
							label="Title"
							name="title"
							component={this.renderField}
						/>
						<Field
							label="Category"
							name="categories"
							component={this.renderField}
						/>
						<Field
							label="Content"
							name="content"
							component={this.renderField}
						/>
						<MuiThemeProvider>
						<RaisedButton label="Cancel" style={button}/>
						</MuiThemeProvider>
						<MuiThemeProvider>
    					<RaisedButton label="Submit" type="submit" primary={true} style={button}/>
    					</MuiThemeProvider>
					</form>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = "Enter some Title"
	}
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null,{createPost})(PostsNew)
);