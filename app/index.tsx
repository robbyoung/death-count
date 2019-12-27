import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import { Screens } from './screens';
import Home from './containers/home';
import NewDeath from './containers/newDeath';
import GamesList from './containers/gamesList';
import NewGame from './containers/newGame';
import Loading from './containers/loading';

const MainNavigator = createStackNavigator(
	{
		Loading: { screen: Loading },
		Home: { screen: Home },
		NewDeath: {screen: NewDeath},
		GamesList: { screen: GamesList },
		NewGame: { screen: NewGame },
	},
	{
		initialRouteName: Screens.Loading,
	},
);

export default createAppContainer(MainNavigator);