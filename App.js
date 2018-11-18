import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Root} from 'native-base';
import Home from './src/screens/Home';
import Menu from './src/screens/Menu';

const App = StackNavigator(
  {
    Home: {screen: Home},
    Menu: {screen: Menu},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',

  },
);

export default () => (
  <Root>
    <App/>
  </Root>
);
