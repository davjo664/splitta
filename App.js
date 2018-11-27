import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Root} from 'native-base';
import Home from './src/screens/Home';
import Scan from './src/screens/Scan';
import MenuContainer from './src/containers/MenuContainer';
import PayContainer from './src/containers/PayContainer';
import { DrawerNavigator } from "react-navigation";
import SideBar from './src/components/SideBar';
import { Provider } from './src/context';

const App = DrawerNavigator(
  {
    Home: { screen: Home },
    Scan: { screen: Scan},
    MenuContainer: { screen: MenuContainer },
    PayContainer: { screen: PayContainer}
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
