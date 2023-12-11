import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BackHeaderComponent = () => {

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <View style={styles.circle}>
          <Icon name="arrow-left" size={25} color="#5c6b73" />
        </View>
        <Text style={styles.textStyle}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackHeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#5c6b73',
    height: hp('7%'),
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: hp('42.5%'),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('5%'),
  },
  circle: {
    backgroundColor: '#9db4c0',
    width: hp('4%'), // Adjust the size of the circle as needed
    height: hp('4%'),
    borderRadius: hp('2%'), // To make it a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2%'), // Adjust the spacing between the circle and text
  },
  textStyle: {
    fontSize: hp('2%'),
    color: '#fff',
  },
});
