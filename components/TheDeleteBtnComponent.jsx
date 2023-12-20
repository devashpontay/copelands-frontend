import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TheDeleteBtnComponent = ({navigation, onPress, onForceUpdate}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textStyle}>DELETE ELECTION</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TheDeleteBtnComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#5C6B73",
    width: wp("85%"),
    height: hp("4.5%"),
    top: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: hp("1.6%"),
    fontWeight: "600",
    color: "white",
  },
});
