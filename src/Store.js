import React, { Component } from 'react';
import { CachedImage } from 'react-native-img-cache';
import { Content, Container, Text } from 'native-base';
import Toolbar from './components/Toolbar';

export default class Store extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar 
						title={ 'Store' } 
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
				<Content>
					
				</Content>
			</Container>
		);
	}

}