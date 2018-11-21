import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Root} from 'native-base';
import Home from './src/screens/Home';
import MenuContainer from './src/containers/MenuContainer';
import { DrawerNavigator } from "react-navigation";
import SideBar from './src/components/SideBar';
import { Provider } from './src/context';

const App = DrawerNavigator(
  {
    MenuContainer: { screen: MenuContainer },
    Home: { screen: Home }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default () => (
  <Provider>
    <Root>
      <App/>
    </Root>
  </Provider>
);
