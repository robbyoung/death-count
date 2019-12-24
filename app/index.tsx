import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import Home from './containers/home';
import NewDeath from './containers/newDeath';
import { Screens } from './screens';

const MainNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		NewDeath: {screen: NewDeath}
	},
	{
		initialRouteName: Screens.Home,
	},
);

export default createAppContainer(MainNavigator);