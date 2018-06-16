import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Container, Content, Text } from 'native-base';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import Toolbar from './components/Toolbar';

export default class WorkshopDetail extends Component {

	static navigationOptions = () => {
		return ({
			header: false
		});
	};

	constructor(props) {
		super(props);
		this.renderContent = this._renderContent.bind(this);
	}

	render() {
		return (
			<CollapsibleToolbar
			    renderContent={this.renderContent}
			    renderNavBar={() => <Toolbar title={'Detail Workshop'} navigation={this.props.navigation} collapsible/>}
			    imageSource='https://lorempixel.com/400/300/'
			    collapsedNavBarBackgroundColor='#424242'
			    translucentStatusBar
			    toolBarHeight={250}
			/>
		);
	}

	_renderContent() {
		return (
			<Container>
	    		<Content>
	    			<Text>HEHE</Text>
	    		</Content>
	    	</Container>
		);
	}

}