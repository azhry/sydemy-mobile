import React, { Component 		} 	from 'react';
import { View, TouchableNativeFeedback 	} 	from 'react-native';
import { Text, Content, Card 	} 	from 'native-base';
import { CachedImage 			} 	from 'react-native-img-cache';

export default class ImageItem extends Component {

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
						<CachedImage resizeMode="cover" style={{ width: '100%', height: 160, borderRadius: 8 }} source={{ uri: this.props.image }}/>
						<View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 8 }}>
							<Text style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',color: 'white', fontSize: 18, textAlign: 'center', paddingHorizontal: 5 }}>{ this.props.title }</Text>
						</View>
					</Card>
				</TouchableNativeFeedback>
			</Content>
		);
	}
}