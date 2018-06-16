/**
 * @author Azhary Arliansyah
 * @company Pudinglab
 *
 * Implement application routes here
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Gateway from './src/Gateway';
import Home from './src/Home';
import ProductScanner from './src/ProductScanner';
import WorkshopList from './src/WorkshopList';
import WorkshopDetail from './src/WorkshopDetail';

// app routes with react navigation
const App = StackNavigator(
	{
		Gateway: { screen: Gateway },
		Home: { screen: Home },
		WorkshopList: { screen: WorkshopList },
		WorkshopDetail: { screen: WorkshopDetail },
		ProductScanner: { screen: ProductScanner },
	},
	{
		initialRouteName: 'WorkshopDetail'
	}
);

export default App;