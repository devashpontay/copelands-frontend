import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WinnerButtonComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>GET WINNER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WinnerButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#5C6B73",
    width: wp("85%"),
    height: hp("4.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: hp("1.8%"),
    fontWeight: "600",
    color: "white",
  },
});
