/**
 * @author Azhary Arliansyah
 * @company Pudinglab
 *
 * Implement application routes here
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Gateway from './src/Gateway';
import ProductScanner from './src/ProductScanner';
import Login from './src/Login';
import Newsfeed from './src/Newsfeed';

// app routes with react navigation
const App = StackNavigator(
	{
		Gateway: { screen: Gateway },
		ProductScanner: { screen: ProductScanner },
		Login: { screen: Login },
		Newsfeed: { screen: Newsfeed }
	},
	{
		initialRouteName: 'ProductScanner'
	}
);

export default App;