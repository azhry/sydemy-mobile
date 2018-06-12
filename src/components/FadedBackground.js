import React, { PureComponent } from 'react';
import { View } from 'react-native';

const divisor = 1000;
const pi = 1 / divisor;

export default class FadedBackground extends PureComponent {

	constructor(props) {
		super(props);
		let i;
		let collection = [];
		let pixelsStyle = {
			width: '100%',
			position: 'absolute',
			height: props.height,
			flexDirection: 'column'
		};
		if (props.direction === 'up') {
			pixelsStyle = {
				...pixelsStyle, bottom: 0
			};
			collection.push(0);
			i = pi;
			while (i < 1) {
				collection.push(i);
				i += pi;
			}
			collection.push(1);
		} else {
			pixelsStyle = {
				...pixelsStyle, top: 0
			};
			collection.push(1);
			i = 1.00;
			while (i > 0) {
				collection.push(i);
				i -= pi;
			}
			collection.push(0);
		}
		let r = 0, g = 0, b = 0;
		if (this.hexToRgb(props.color)) {
			let color = this.hexToRgb(props.color);
			r = color.r;
			g = color.g;
			b = color.b;
		}
		this.state = {
			collection,
			pixelsStyle,
			r, g, b
		};
	}

	render() {
		const { children, height } = this.props;
		const { collection, pixelsStyle, r, g, b } = this.state;
		console.log("FADED BACKGROUND RENDERED");
		return (
			<View style={{ flexDirection: 'column' }}>
				<View style={ pixelsStyle }>
					{
						collection.map((o, key) => <View key={ key } style={{ height: (height / divisor), backgroundColor: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')' }}/>)
					}
				</View> 
				{ children }
			</View>
		);
	}

	hexToRgb(hex) {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function (m, r, g, b) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

}