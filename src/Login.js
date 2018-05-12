import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import Toolbar from './components/Toolbar';

export default class Login extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Login' } />
		};
	};

	constructor( props ) {

		super( props );

	}

	render() {

		return (
			<Container>
				<Text>Login</Text>
			</Container>
		);

	}

}