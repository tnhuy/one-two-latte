import React, { Component } from 'react';
const style = {
	height:150,
	width:200
}
class GoogleMap extends Component{
	componentDidMount(){
		// eslint-disable-next-line
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render(){
		return (<div ref="map" style={style}/>);
	}
}

export default GoogleMap;