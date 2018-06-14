import React, { Component 					} 	from 'react';
import { FlatList, View, Dimensions 		} 	from 'react-native';
import { Container, Content, Text, Icon 	} 	from 'native-base';
import Toolbar 									from './components/Toolbar';
import ImageItem 								from './components/ImageItem';
import Carousel 								from 'react-native-snap-carousel';

const deviceWidth = Dimensions.get('window').width;

export default class Home extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Sydemy' } />
		};
	};

	constructor(props) {

		super(props);
		this.state = {
			data: [{
				title: 'Insight Workshop',
				description: 'Deskripsi singkat mengenai Workshop',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/LeafnoPic.png',
				navigateTo: 'WorkshopList'
			}, {
				title: 'Intensive Class',
				description: 'Deskripsi singkat mengenai Intensive Class',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_IC.jpg',
				navigateTo: 'ProductScanner'
			}, {
				title: 'Weekend Class',
				description: 'Deskripsi singkat mengenai Weekend Class',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_WC.jpg',
				navigateTo: 'ProductScanner'
			}, {
				title: 'Shop',
				description: 'Deskripsi singkat mengenai Shop',
				image: 'http://placehold.it/200',
				navigateTo: 'ProductScanner'
			}]
		};

	}

	render() {

		const { navigate } = this.props.navigation;

		return (
			<Container>
				<Content>
					<Carousel
						ref={c => { this._carousel = c; }}
						data={this.state.data}
						renderItem={({item, index}) => (
							<ImageItem 
								title={item.title}
								image={item.image}/>
						)}
						sliderWidth={deviceWidth}
						itemWidth={deviceWidth}
						autoplay
						loop/>
					<View style={{ marginHorizontal: 6 }}>
						<Text style={{ fontSize: 19 }}><Icon name="ios-ribbon"/> Our Services</Text>
					</View>
					<FlatList
						numColumns={2}
						data={this.state.data}
						renderItem={({ item }) =>
							<ImageItem
								title={item.title}
								image={item.image}
								navigateTo={() => navigate(item.navigateTo)}/>	
						}
						keyExtractor={( item, index ) => index.toString()}/>
				</Content>
			</Container>
		);

	}

}