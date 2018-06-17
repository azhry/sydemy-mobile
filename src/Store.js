import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { CachedImage } from 'react-native-img-cache';
import { Content, Container, Text } from 'native-base';
import Toolbar from './components/Toolbar';
import Carousel from 'react-native-snap-carousel';
import RecommendedItem from './components/RecommendedItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const deviceWidth = Dimensions.get('window').width;

export default class Store extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar 
						title={ 'Store' } 
						navigation={navigation} 
						menu 
						topUpMenu
						popUpMenu/>
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'Python T-shirt',
					image: 'https://images-na.ssl-images-amazon.com/images/I/61Aarfx%2B5YL._UX385_.jpg',
					price: 'Rp. 100.000,-'
				},
				{
					title: 'Programmer Snapback',
					image: 'https://cdn.shopify.com/s/files/1/2233/3607/products/DynamicImageHandler_1dd43d2f-969f-4912-95e0-6e7d759268b8_400x.png?v=1513957806',
					price: 'Rp. 60.000,-'
				}
			]
		};
	}

	render() {
		return (
			<Container>
				<Content>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 10, alignItems: 'center' }}>
						<Icon name="star" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>Recommended Item</Text>
					</View>
					<Carousel 
						data={this.state.data}
						renderItem={({ item, index }) => 
							<RecommendedItem 
								title={item.title}
								image={item.image}
								price={item.price}/>
						}
						layout={'default'}
						sliderWidth={deviceWidth}
						itemWidth={270}
						activeSlideAlignment={'start'}/>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 10, alignItems: 'center' }}>
						<Icon name="shopping-cart" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>Category</Text>
					</View>
				</Content>
			</Container>
		);
	}

}