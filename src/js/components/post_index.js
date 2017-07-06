import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

const style = {
	padding: 20,
}

const h3 = {
	paddingTop: 10
}
class PostIndex extends Component {
	componentDidMount () {
		this.props.fetchPosts();
	}

	renderPosts (){
		return _.map(this.props.posts, post =>{
			return (
				<li key={post.id}>
					<Link to={`/posts/${post.id}`}>{post.id} {post.title}</Link>
				</li>
				);
		});
	}

	render (){
		return (
			<div style={style}>
				<MuiThemeProvider>
				<RaisedButton type="submit" label="Add New Post" primary={true} containerElement={<Link to="/posts/new"/>}/>
				</MuiThemeProvider>
				<h3 style={h3}>Posts</h3>
				<ul>
					{this.renderPosts()}
				</ul>
			</div>
			);
	}
}

function mapStateToProps(state){
	return { posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);