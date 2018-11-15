import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

import locations from '../assets/data/locationsList.json'
import { LocationListItem } from '../components/LocationListItem';
import Colors from '../global/Colors';

export default class FollowedLocationsScene extends React.Component {
  static navigationOptions = {
    title: 'Following',
  };

  render() {
    const { navigate } = this.props.navigation;
    const followedLocations = locations.filter(l => !!l.following);

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={followedLocations}
          renderItem={
            ({item}) => 
            <LocationListItem 
              following={item.following}
              onPress={() => navigate('LocationView', { 
                item: item,
              })}
              >
                {item.name}
            </LocationListItem>}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
    textAlign: 'center'
  },
});
