import * as React from 'react';
import MenuScreen from '../screens/Menu';

export default class MenuContainer extends React.Component<Props, State> {
  render() {
    return (
      <MenuScreen
        articles={[{name:"Hawaii", price: "85", ingredients: "Ost, skinka, ananas"}, {name:"Margarita", price: "80", ingredients: "Ost"}]}
        navigation={this.props.navigation}
      />
    );
  }
}
