import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import Toolbar from './components/Toolbar';

export default class ProductDetail extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar 
						title={navigation.state.params.item.title} 
						navigation={navigation} 
						menu 
						topUpMenu
						popUpMenu/>
		};
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Content></Content>
			</Container>
		);
	}

}