import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BackHeaderComponent = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <View style={styles.iconBack}>
          <Icon name="arrow-back" size={hp("3%")} color="yellow" />
        </View>
        {/* <Text style={styles.headerText}>Back</Text> */}
      </TouchableOpacity>
      <View style={styles.backContainer}>
        <Text style={styles.headerText}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5c6b73',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('100%'),
    // paddingLeft: wp('3%'),
    bottom: hp('27.5%'),
  },
  backContainer: {

  },
  headerText: {
    fontSize: hp('2.5%'),
    color: '#FFFFFF',
  },
  iconBack: {
    width: hp('5%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('3%'),
  },
});

export default BackHeaderComponent;
