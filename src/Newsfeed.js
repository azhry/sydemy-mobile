import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Root, Text } from 'native-base';
import Toolbar from './components/Toolbar';
import ModifiedCard from './components/ModifiedCard';
import { Request } from './helpers/NetworkRequest';


export default class Newsfeed extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: (
				<Toolbar 
					title="Newsfeed"
					navigation={ navigation } />
			)
		};
	};

	constructor( props ) {

		super( props );
		this.state = {
			data: [
				{
					headerSrc: 'http://placehold.it/60x60',
					bodySrc: 'http://placehold.it/350x200',
					title: 'Pudinglab',
					description: 'Azhary Arliansyah'
				},
				{
					headerSrc: 'http://placehold.it/60x60',
					bodySrc: 'http://placehold.it/350x200',
					title: 'Pudinglab',
					description: 'Azhary Arliansyah'
				}
			]
		};

	}

	componentDidMount() {

		Request( 'service/poll?type=all', 'GET' )
		.then(( responseJson ) => {
			this.setState({ data: responseJson.data });
		});

	}

	render() {

		return (
			<Root>
				<Container>
					<Content>
						<FlatList
							data={ this.state.data }
							renderItem={({ item }) => 
								<ModifiedCard
									headerSrc={ 'http://placehold.it/60x60' }
									bodySrc={ 'http://placehold.it/350x200' }
									company={ item.title }
									author={ item.description } />
							}
							keyExtractor={( item, index ) => index.toString()} />
					</Content>
				</Container>
			</Root>
		);

	}

}