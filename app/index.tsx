import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './containers/home';

const MainNavigator = createStackNavigator(
	{
		Home,
	}
);

export default createAppContainer(MainNavigator);