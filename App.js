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
import IntensiveClassList from './src/IntensiveClassList';
import IntensiveClassDetail from './src/IntensiveClassDetail';
import WeekendClassList from './src/WeekendClassList';
import WeekendClassDetail from './src/WeekendClassDetail';
import TopUpScanner from './src/TopUpScanner';
import Store from './src/Store';
import ProductList from './src/ProductList';
import ProductDetail from './src/ProductDetail';

// app routes with react navigation
const App = StackNavigator(
	{
		Gateway: { screen: Gateway },
		Home: { screen: Home },
		WorkshopList: { screen: WorkshopList },
		WorkshopDetail: { screen: WorkshopDetail },
		IntensiveClassList: { screen: IntensiveClassList },
		IntensiveClassDetail: { screen: IntensiveClassDetail },
		WeekendClassList: { screen: WeekendClassList },
		WeekendClassDetail: { screen: WeekendClassDetail },
		TopUpScanner: { screen: TopUpScanner },
		ProductScanner: { screen: ProductScanner },
		Store: { screen: Store },
		ProductList: { screen: ProductList },
		ProductDetail: { screen: ProductDetail }
	},
	{
		initialRouteName: 'Store'
	}
);

export default App;