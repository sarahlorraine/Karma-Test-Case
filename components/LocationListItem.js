import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PlainIcon  from './PlainIcon';
import Colors from '../global/Colors';

export class LocationListItem extends React.Component {
  render() {
    return (
      <View style={styles.itemWrapper}>
        <PlainIcon name={!!this.props.following ? 'md-star' : 'md-star-outline'} color={Colors.yellow} />
        <Text style={styles.heading} {...this.props} />
        <PlainIcon style={styles.icon} name="md-arrow-round-forward"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    color: Colors.primary,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  heading: {
    fontSize: 18,
    fontFamily: 'rubik',
    maxWidth: '85%',
    paddingLeft: 16,
    paddingRight: 20,
    flex: 1
  },
  icon: {
    display: 'flex',
    fontSize: 16,
    alignSelf: 'flex-end',
  }
});
