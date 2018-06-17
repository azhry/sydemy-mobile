import React, { Component 									} 	from 'react';
import { StatusBar, TouchableNativeFeedback, View			} 	from 'react-native';
import { CachedImage 										} 	from 'react-native-img-cache';
import { Header, Left, Body, Right, Button, Title  			} 	from 'native-base';
import Icon 													from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Toolbar extends Component {

	constructor(props) {
		super(props);
	}

	_renderBackButton( navigation ) {
		return (<Left><Icon style={{ color: 'white' }} name="arrow-left" size={25} onPress={ () => navigation.goBack() } /></Left>);
	}

	_renderMenuButton(navigation) {
		const { navigate } = navigation;
		return (
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				{this.props.topUpMenu ? this._renderTopUpButton(navigation) : <View></View>}
				{this.props.popUpMenu ? this._renderPopUpButton(navigation) : <View></View>}
			</View>
		);
	}

	_renderTopUpButton(navigation) {
		return (
			<View style={this.props.popUpMenu ? { marginRight: 20 } : {}}>
				<TouchableNativeFeedback 
					style={{ backgroundColor: '#424242' }}
					background={TouchableNativeFeedback.SelectableBackground()}
					onPress={() => navigate('TopUpScanner')}>
					<Icon name="qrcode" size={25} color="white"/>
				</TouchableNativeFeedback>
			</View>
		);
	}

	_renderPopUpButton(navigation) {
		return (
			<View>
				<TouchableNativeFeedback style={{ backgroundColor: '#424242' }}>
					<Icon name="dots-vertical" size={25} color="white" />
				</TouchableNativeFeedback>
			</View>
		);
	}

	render() {

		return (
			<Header style={this.props.collapsible ? { backgroundColor: 'rgba(0, 0, 0, 0)' } : { backgroundColor: '#424242' }}>
				<StatusBar translucent={this.props.collapsible} backgroundColor={this.props.collapsible ? "rgba(0, 0, 0, 0)" : "#424242"}/>
				{
					this.props.navigation != undefined && !this.props.noBackButton ? this._renderBackButton( this.props.navigation ) : (<Left><CachedImage style={{ width: 30, height: 30 }} source={require('../../assets/img/in_app_logo.png')} /></Left>)
				}
				<Body style={{ flex: 2 }}>
					<Title>{ this.props.title }</Title>
				</Body>
				<Right style={{ marginRight: 10 }}>
					{this.props.menu && this.props.navigation ? this._renderMenuButton(this.props.navigation) : <View></View>}
				</Right>
			</Header>
		);

	}

}