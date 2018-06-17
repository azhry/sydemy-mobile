import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, View } from 'react-native';
import { Container, Content } from 'native-base';
import Toolbar from './components/Toolbar';
import IntensiveClassItem from './components/IntensiveClassItem';

export default class IntensiveClassList extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: <Toolbar title={ 'Intensive Class' } navigation={ navigation } />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'Android Programming Class',
					description: 'Android programming intensive class',
					date: new Date().toString(),
					image: 'https://sydemy.com/home/../admission/admin/slider_banner/images/slider_WC.jpg'
				},
				{
					title: 'Full-stack Programming Class',
					description: 'Full-stack programming class',
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
								onPress={() => navigate('IntensiveClassDetail', { item })}>
								<View>
									<IntensiveClassItem 
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