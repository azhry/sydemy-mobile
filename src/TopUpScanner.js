import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Toolbar from './components/Toolbar';

export default class TopUpScanner extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={'Top Up'} navigation={navigation} />
		};
	};

	constructor(props) {

		super(props);
		this.state = {
			qrcode: ''
		};

	}

	render() {

		return (
			<QRCodeScanner
				showMarker
				reactivate
				reactivateTimeout={4000}
				onRead={this.onSuccess.bind(this)}
				topContent={
					<Text style={{ textAlign: 'center' }}>{this.state.qrcode}</Text>
				}
				bottomContent={
					<View style={{ paddingHorizontal: 12 }}>
						<Text style={styles.buttonText} note>Pindai QR Code pada voucher yang tersedia untuk melakukan Top Up</Text>
					</View>
				}/>
		);

	}

	onSuccess = e => {
		console.log(e);
		this.setState({ qrcode: e.data });
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
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		color: 'rgba(0, 0, 0, 0.8)'
	}
});