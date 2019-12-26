import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import { Screens } from './screens';
import Home from './containers/home';
import NewDeath from './containers/newDeath';
import GamesList from './containers/gamesList';

const MainNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		NewDeath: {screen: NewDeath},
		GamesList: { screen: GamesList },
	},
	{
		initialRouteName: Screens.Home,
	},
);

export default createAppContainer(MainNavigator);