import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../css/App.css';
import Header from '../components/header';

const style = {
	paddingTop: 50,
	textAlign: 'center'
}

class PostShow extends Component {
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchPost(id);
	}
	onDeleteClick(){
		const {id} = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render(){
		const { post } = this.props;

		if (!post) {
			return <div><Header /><div style={style}>loading...</div></div>;
		}

		return (
			<div>
				<Header />
				<div style={style}>
					<div>
						<MuiThemeProvider>
						<RaisedButton label="Delete" secondary={true} onClick={this.onDeleteClick.bind(this)}/>
						</MuiThemeProvider>
					</div> 
					<h3>{post.title}</h3>
					<h5>Category:{post.categories}</h5>
					<p>Content: {post.content}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps({posts}, ownProps){
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);