/**
 * @author Azhary Arliansyah
 * @company Pudinglab
 *
 * Implement splash screen or app intro here
 */


import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Text, Root } from 'native-base';
import { NavigationReset } from './helpers/Navigation';
import AppIntro from 'react-native-app-intro';

export default class Gateway extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: false
		};
	};

	onSkipBtnHandle = ( index ) => {
		Alert.alert( 'skip' );
	}

	doneBtnHandle = ( index ) => {
		Alert.alert( 'done' );
	}

	nextBtnHandle = ( index ) => {
		Alert.alert( 'next' );
	}

	onSlideChangeHandle = ( index, total ) => {
		console.log( index, total );
	}

	constructor( props ) {

		super( props );
		// this._redirect();

	}


	_redirect() {

		let loggedIn = true;

		// check whether you had been logged in before
		if ( loggedIn ) {

			NavigationReset( this.props, 0, { routeName: 'Newsfeed' } );

		} else {

			NavigationReset( this.props, 0, { routeName: 'Login' } );

		}

	}

	render() {

		const pageArray = [{
			title: 'Page 1',
			description: 'Description 1',
			img: 'https://goo.gl/Bnc3XP',
			imgStyle: {
				height: 80 * 2.5,
				width: 109 * 2.5,
			},
			backgroundColor: '#fa931d',
			fontColor: '#fff',
			level: 10,
		}, {
			title: 'Page 2',
			description: 'Description 2',
			img: 'https://goo.gl/Bnc3XP',
			imgStyle: {
				height: 93 * 2.5,
				width: 103 * 2.5,
			},
			backgroundColor: '#a4b602',
			fontColor: '#fff',
			level: 10,
		}];

		return (
			<AppIntro
				onNextBtnClick={this.nextBtnHandle}
		        onDoneBtnClick={this.doneBtnHandle}
		        onSkipBtnClick={this.onSkipBtnHandle}
		        onSlideChange={this.onSlideChangeHandle}
		        pageArray={pageArray} />
		);

	}

}