import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import PlainIcon from '../components/PlainIcon';
import HeaderText from '../components/HeaderText';

import locations from '../assets/data/locationsList.json'

import Colors from '../global/Colors';

export default class LocationViewScene extends React.Component {
  static navigationOptions = {
    title: 'Location view',
  };

  render() {
    const backAction = NavigationActions.back({
      key: null
    }); 
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'No data available');
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.locationContent}>
          <HeaderText>{item.name}</HeaderText>
          <Text>{item.latitude}, {item.longitude}</Text>
          <Text>{item.following ? <Text><PlainIcon name="md-star" color={Colors.yellow}/> Following </Text>: ''}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  locationContent: {
    textAlign: 'center',
  },
});
