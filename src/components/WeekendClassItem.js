import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Content, Text, H2 } from 'native-base';
import { CachedImage } from 'react-native-img-cache';

export default class WeekendClassItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Content>
				<Card style={{ width: '100%', height: 150, padding: 16 }}>
					<View style={{ width: '100%', height: '80%', flexDirection: 'row', flexWrap: 'wrap' }}>
						<View style={{ width: '73%', paddingRight: 10 }}>
							<H2>{this.props.title}</H2>
						</View>
						<View style={{ width: '27%' }}>
							<CachedImage resizeMode="cover" style={{ width: 80, height: 80, alignItems: 'center' }} source={{ uri: this.props.image }}/>
						</View>
					</View>
					<View style={{ width: '100%', height: '20%' }}>
						<Text note style={{ position: 'absolute', bottom: 0 }}>{this.props.date}</Text>
					</View>
				</Card>
			</Content>
		);
	}

}