import React, { Component } from 'react';
import { Dimensions, View, FlatList } from 'react-native';
import { CachedImage } from 'react-native-img-cache';
import { Content, Container, Text, Button } from 'native-base';
import Toolbar from './components/Toolbar';
import Carousel from 'react-native-snap-carousel';
import RecommendedItem from './components/RecommendedItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryItem from './components/CategoryItem';

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
			],
			categories: [
				{
					title: 'Merchandise',
					image: 'http://heyday.co.in/wp-content/uploads/2018/02/Merchandise.jpg',
					description: 'Brief description about merchandise'
				},
				{
					title: 'Accessories',
					image: 'http://heyday.co.in/wp-content/uploads/2018/02/Merchandise.jpg',
					description: 'Brief description about accessories'
				},
				{
					title: 'Stickers',
					image: 'http://heyday.co.in/wp-content/uploads/2018/02/Merchandise.jpg',
					description: 'Brief description about stickers'
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
					<View>
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
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 10, alignItems: 'center' }}>
						<Icon name="shopping-cart" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>Category</Text>
					</View>

					{/* Large image over network not cached properly */}
					<FlatList
						data={this.state.categories}
						renderItem={({ item }) =>
							<CategoryItem 
								title={item.title}
								image={item.image}
								description={item.description}
								navigateTo={() => this.props.navigation.navigate('ProductList', { item })}/>	
						}
						keyExtractor={( item, index ) => index.toString()}/>

					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 10, alignItems: 'center' }}>
						<Icon name="qrcode" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>Scan Product QR Code</Text>
					</View>
					<Button dark block 
						style={{ margin: 10 }}
						onPress={() => this.props.navigation.navigate('ProductScanner')}>
						<Text>Scan Now</Text>
					</Button>
				</Content>
			</Container>
		);
	}

}