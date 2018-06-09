import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text } from 'native-base';
import Toolbar from './components/Toolbar';
import ImageItem from './components/ImageItem';

export default class Home extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Sydemy' } />
		};
	};

	constructor( props ) {

		super( props );
		this.state = {
			data: [{
				title: 'Insight Workshop',
				description: 'Deskripsi singkat mengenai Workshop',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/LeafnoPic.png'
			}, {
				title: 'Intensive Class',
				description: 'Deskripsi singkat mengenai Intensive Class',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_IC.jpg'
			}, {
				title: 'Weekend Class',
				description: 'Deskripsi singkat mengenai Weekend Class',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_WC.jpg'
			}, {
				title: 'Shop',
				description: 'Deskripsi singkat mengenai Shop',
				image: 'http://placehold.it/200'
			}]
		};

	}

	render() {

		return (
			<Container>
				<Content>
					<FlatList 
						data={ this.state.data }
						renderItem={({ item }) => 
							<ImageItem 
								title={ item.title }
								description={ item.description }
								image={ item.image }/>
						}
						keyExtractor={( item, index ) => index.toString()}/>
				</Content>
			</Container>
		);

	}

}