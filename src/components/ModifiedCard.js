import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class ModifiedCard extends Component {

	constructor( props ) {

		super( props );

	}

	render() {

		return (
			<Card>
				<CardItem>
					<Left>
						<Thumbnail source={{ uri: this.props.headerSrc }} />
						<Body>
							<Text>{ this.props.company }</Text>
							<Text note>{ this.props.author }</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image source={{ uri: this.props.bodySrc }} style={{ height: 200, width: null, flex: 1 }} />
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent>
							<Icon active name="thumbs-up" />
							<Text>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent>
							<Icon active name="chatbubbles" />
							<Text>4 Comments</Text>
						</Button>
					</Body>
					<Right>
						<Text>11h ago</Text>
					</Right>
				</CardItem>
			</Card>
		);

	}

}