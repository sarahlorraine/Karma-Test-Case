import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../global/Colors';

import TabBarIcon from '../components/TabBarIcon';
import FollowedLocationsScene from '../scenes/FollowedLocationsScene';
import LocationsListScene from '../scenes/LocationsListScene';
import LocationsViewScene from '../scenes/LocationsViewScene';


const FollowedLocationsStack = createStackNavigator({
  FollowedLocations: FollowedLocationsScene,
  LocationView: LocationsViewScene
});

FollowedLocationsStack.navigationOptions = {
  tabBarLabel: 'Followed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-star'}
    />
  ),
};

const LocationListStack = createStackNavigator({
  LocationList: LocationsListScene,
  LocationView: LocationsViewScene
});

LocationListStack.navigationOptions = {
  tabBarLabel: 'Locations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-pin'}
    />
  ),
};

export default createBottomTabNavigator({
  FollowedLocationsStack,
  LocationListStack,
});
