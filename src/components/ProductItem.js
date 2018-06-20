import React, { Component 				} 	from 'react';
import { View, TouchableNativeFeedback 	} 	from 'react-native';
import { Text, Content, Card 			} 	from 'native-base';
import { CachedImage 					} 	from 'react-native-img-cache';

export default class ProductItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Content style={{ marginHorizontal: 6, marginVertical: 4 }}>
				<TouchableNativeFeedback
					onPress={this.props.navigateTo}
					background={TouchableNativeFeedback.SelectableBackground()}>
				<Card style={{ borderRadius: 8 }}>
					<CachedImage resizeMode="cover" style={{ width: '100%', height: 200, borderRadius: 8 }} source={{ uri: this.props.image }}/>
					<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingVertical: 15 }}>
						<View style={{ flex: 2, paddingLeft: 10 }}>
							<Text style={{ color: 'white', fontSize: 18 }}>{ this.props.title }</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text note style={{ color: 'white', position: 'absolute', bottom: 0, fontSize: 12 }}>{this.props.price}</Text>
						</View>
					</View>
				</Card>
				</TouchableNativeFeedback>
			</Content>
		);
	}
}