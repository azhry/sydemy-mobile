import React, { Component 					} 	from 'react';
import { FlatList, View, Dimensions 		} 	from 'react-native';
import { Container, Content, Text 			} 	from 'native-base';
import Toolbar 									from './components/Toolbar';
import ImageItem 								from './components/ImageItem';
import Carousel 								from 'react-native-snap-carousel';
import Icon 									from 'react-native-vector-icons/FontAwesome';

const deviceWidth = Dimensions.get('window').width;

export default class Home extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar 
						title={ 'Sydemy' } 
						navigation={navigation} 
						noBackButton 
						menu 
						topUpMenu
						popUpMenu/>
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
				navigateTo: 'IntensiveClassList'
			}, {
				title: 'Weekend Class',
				description: 'Deskripsi singkat mengenai Weekend Class',
				image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_WC.jpg',
				navigateTo: 'WeekendClassList'
			}, {
				title: 'Store',
				description: 'Deskripsi singkat mengenai Store',
				image: 'https://store.turningtechnologies.com/images/ExamView-screenshot-laptop.jpg',
				navigateTo: 'Store'
			}]
		};

	}

	render() {

		const { navigate } = this.props.navigation;

		return (
			<Container>
				<Content>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 10, alignItems: 'center' }}>
						<Icon name="eercast" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>News & Promo</Text>
					</View>
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
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 6, marginTop: 10, alignItems: 'center' }}>
						<Icon name="magic" size={20} style={{ marginRight: 7 }}/>
						<Text style={{ fontSize: 20 }}>Our Service</Text>
					</View>
					<FlatList
						numColumns={2}
						data={this.state.data}
						renderItem={({ item }) =>
							<ImageItem
								title={item.title}
								image={item.image}
								navigateTo={() => navigate(item.navigateTo, { item })}/>	
						}
						keyExtractor={( item, index ) => index.toString()}/>
				</Content>
			</Container>
		);

	}

}