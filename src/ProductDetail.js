import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { CachedImage } from 'react-native-img-cache';
import Toolbar from './components/Toolbar';

export default class ProductDetail extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar 
						title={navigation.state.params.item.title} 
						navigation={navigation} 
						menu 
						topUpMenu
						popUpMenu/>
		};
	};

	constructor(props) {
		super(props);
		this.item = this.props.navigation.state.params.item;
	}

	render() {
		return (
			<Container>
				<Content>
					<CachedImage
						resizeMode="cover" 
						source={{ uri: this.item.image }}
						style={{ width: '100%', height: 230 }}/>
					<View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, paddingTop: 15 }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Nama Produk</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{this.item.title}</Text>
	    				</View>
	    			</View>
	    			<View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.7)' }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Harga</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{this.item.price}</Text>
	    				</View>
	    			</View>
	    			<View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingVertical: 5, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.7)', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.7)' }}>
	    				<View style={{ flex: 1 }}>
	    					<Text>Deskripsi</Text>
	    				</View>
	    				<View style={{ flex: 2 }}>
	    					<Text note style={{ color: 'rgba(0, 0, 0, 0.8)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
	    				</View>
	    			</View>
				</Content>
			</Container>
		);
	}

}