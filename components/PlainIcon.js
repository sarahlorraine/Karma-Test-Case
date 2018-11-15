import React from 'react';
import { Icon } from 'expo';

import Colors from '../global/Colors';

export default class PlainIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        color={this.props.color || Colors.tabIconDefault}
        style={{ marginBottom: -3 }}
      />
    );
  }
}