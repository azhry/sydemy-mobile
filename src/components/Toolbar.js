import React, { Component 									} from 'react';
import { StatusBar 											} from 'react-native';
import { CachedImage 										} from 'react-native-img-cache';
import { Header, Left, Body, Right, Button, Icon, Title  	} from 'native-base';

export default class Toolbar extends Component {

	constructor( props ) {

		super( props );

	}

	_renderBackButton( navigation ) {
		return (<Left><Icon style={{ color: 'white' }} name="arrow-back" onPress={ () => navigation.goBack() } /></Left>);
	}

	render() {

		return (
			<Header style={this.props.collapsible ? { backgroundColor: 'rgba(0, 0, 0, 0)' } : { backgroundColor: '#424242' }}>
				<StatusBar translucent={this.props.collapsible} backgroundColor={this.props.collapsible ? "rgba(0, 0, 0, 0)" : "#424242"}/>
				{
					this.props.navigation != undefined ? this._renderBackButton( this.props.navigation ) : (<Left><CachedImage style={{ width: 30, height: 30 }} source={require('../../assets/img/in_app_logo.png')} /></Left>)
				}
				<Body style={{ flex: 2 }}>
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