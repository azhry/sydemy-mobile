/**
 * @author Azhary Arliansyah
 * @company Pudinglab
 *
 * Helper functions for app navigation
 */

import { NavigationActions } from 'react-navigation';

export function NavigationReset( props, index, route ) {

	// reset unused stack to release memory when navigating
	props.navigation.dispatch(NavigationActions.reset({
		index: index,
		actions: [
			NavigationActions.navigate( route )
		]
	}));

}

export function Navigate( props, route ) {

	const { navigate } = props.navigation;
	navigate( route );

}