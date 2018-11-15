import React from 'react';
import { Text } from 'react-native';

import Colors from '../global/Colors';

export default class HeaderText extends React.Component {
  render() {
    return (
      <Text style={{fontSize: 18, fontFamily: 'rubik'}} {...this.props} />
    );
  }
}