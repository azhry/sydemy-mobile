import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, View } from 'react-native';
import { Container, Content } from 'native-base';
import Toolbar from './components/Toolbar';
import WeekendClassItem from './components/WeekendClassItem';

export default class WeekendClassList extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Weekend Class' } navigation={ navigation } />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'Web Developer Class',
					description: 'Web developer weekend class',
					date: new Date().toString(),
					image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_WC.jpg'
				},
				{
					title: 'Laravel + VueJS Class',
					description: 'Laravel + VueJS weekend class',
					date: new Date().toString(),
					image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_IC.jpg'
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
						data={this.state.data}
						renderItem={({ item }) => 
							<TouchableNativeFeedback
								background={TouchableNativeFeedback.SelectableBackground()}
								onPress={() => navigate('WeekendClassDetail', { item })}>
								<View>
									<WeekendClassItem 
										title={item.title}
										image={item.image}
										description={item.description}
										date={item.date}/>
								</View>
							</TouchableNativeFeedback>
						}
						keyExtractor={( item, index ) => index.toString()}/>
				</Content>
			</Container>
		);
	}

}