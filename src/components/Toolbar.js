import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text  } from 'native-base';

export default class Toolbar extends Component {

	constructor( props ) {

		super( props );

	}

	_renderBackButton( navigation ) {
		return (<Icon style={{ color: 'white' }} name="arrow-back" onPress={ () => navigation.goBack() } />);
	}

	render() {

		return (
			<Header>
				<Left>
					{ this.props.navigation != undefined ? this._renderBackButton( this.props.navigation ) : <Text></Text> }
				</Left>
				<Body>
					<Title>{ this.props.title }</Title>
				</Body>
				<Right>
					<Button style={{ opacity: 0 }}>
						<Icon name="menu" />
					</Button>
				</Right>
			</Header>
		);

	}

}