import * as React from 'react';
import PayScreen from '../screens/Pay';

export default class PayContainer extends React.Component<Props, State> {
  render() {
    return (
      <PayScreen
        navigation={this.props.navigation}
      />
    );
  }
}
