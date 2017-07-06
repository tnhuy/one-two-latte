import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average (data){
	return _.round(1.8 * (_.sum(data)/data.length - 273 ) +32);
}

export default (props) => {
		return(
			<div>
				<Sparklines data={props.data}>
				    <SparklinesLine style={{ strokeWidth: 3, stroke: props.color, fill: "none" }} />
					<SparklinesReferenceLine type="avg"/>
				</Sparklines>
				<div>{average(props.data)} {props.unit}</div>
			</div>
			)
}
