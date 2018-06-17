import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, View } from 'react-native';
import { Container, Content } from 'native-base';
import Toolbar from './components/Toolbar';
import WorkshopItem from './components/WorkshopItem';

export default class WorkshopList extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Workshop' } navigation={ navigation } />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'Data Science Session: Text Mining',
					description: 'Workshop Text Mining Menggunakan Python',
					date: new Date().toString(),
					image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_WC.jpg'
				},
				{
					title: 'Data Science Session: Weather Forecasting',
					description: 'Workshop Weather Forecasting Menggunakan Python',
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
								onPress={() => navigate('WorkshopDetail', { item })}>
								<View>
									<WorkshopItem 
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