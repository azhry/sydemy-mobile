import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Body, Icon } from 'native-base';
import FadedBackground from './FadedBackground';

export default class ImageItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Image resizeMode="cover" style={{ width: '100%', height: 200 }} source={{ uri: this.props.image }}/>
				<View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
					<FadedBackground color="#000000" height={ 70 } direction="up">
						<View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
							<Body style={{ alignItems: 'flex-start', flex: 7 }}>
								<Text style={{ color: 'white' }}>{ this.props.title }</Text>
								<Text style={{ color: 'white' }} note>{ this.props.description }</Text>
							</Body>
							<Body>
								<Icon name="more" style={{ color: 'white' }}/>
							</Body>
						</View>
					</FadedBackground>
				</View>
			</View>
		);
	}

}