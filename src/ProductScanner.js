import React, { Component } from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Toolbar from './components/Toolbar';

export default class ProductScanner extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Sydemy' } />
		};
	};

	constructor( props ) {

		super( props );

	}

	render() {

		return (
			<QRCodeScanner
				showMarker
				onRead={this.onSuccess.bind(this)}
				topContent={
					<Text style={styles.centerText}>
						Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
					</Text>
				}
				bottomContent={
					<TouchableOpacity style={styles.buttonTouchable}>
						<Text style={styles.buttonText}>OK. Got it!</Text>
					</TouchableOpacity>
				}/>
		);

	}

	onSuccess = e => {
		console.log(e);
		// Linking
		// 	.openURL(e.data)
		// 	.catch(err => console.error("An error occured", err));
	};

}

const styles = StyleSheet.create({
	centerText: {
		flex: 1,
		fontSize: 18,
		padding: 32,
		color: '#777'
	},
	textBold: {
		fontSize: 21,
		color: 'rgb(0, 122, 255)'
	},
	buttonTouchable: {
		padding: 16
	}
});