import React, { Component 									} from 'react';
import { StatusBar 											} from 'react-native';
import { CachedImage 										} from 'react-native-img-cache';
import { Header, Left, Body, Right, Button, Icon, Title  	} from 'native-base';

export default class Toolbar extends Component {

	constructor( props ) {

		super( props );

	}

	_renderBackButton( navigation ) {
		return (<Icon style={{ color: 'white' }} name="arrow-back" onPress={ () => navigation.goBack() } />);
	}

	render() {

		return (
			<Header style={{ backgroundColor: '#424242' }}>
				<StatusBar backgroundColor="#424242"/>
				{
					this.props.navigation != undefined ? (<Left>this._renderBackButton( this.props.navigation</Left>) : (<Left><CachedImage style={{ width: 30, height: 30 }} source={require('../../assets/img/in_app_logo.png')} /></Left>)
				}
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