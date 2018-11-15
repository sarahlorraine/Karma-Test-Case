import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';

import locations from '../assets/data/locationsList.json'
import { LocationListItem } from '../components/LocationListItem';

import Colors from '../global/Colors';

export default class LocationsListScene extends React.Component {
  static navigationOptions = {
    title: 'All locations',
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <FlatList 
          data={locations}
          renderItem={({item}) => <LocationListItem following={item.following}>{item.name}</LocationListItem>}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.lightBg,
  },
});
