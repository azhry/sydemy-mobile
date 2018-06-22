import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import Toolbar from './components/Toolbar';
import ProductItem from './components/ProductItem';

export default class ProductList extends Component {

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

		const { navigate } = this.props.navigation;

		return (
			<Container>
				<Content>
					<FlatList
						numColumns={2}
						data={this.state.data}
						renderItem={({ item }) =>
							<ProductItem
								title={item.title}
								image={item.image}
								price={item.price}
								navigateTo={() => navigate('ProductDetail', { item })}/>	
						}
						keyExtractor={( item, index ) => index.toString()}/>
				</Content>
			</Container>
		);
	}

}