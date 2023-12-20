import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SubmitBtnComponent = ({ submit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButton} onPress={submit}>
        <Text style={styles.textStyleSubmit}>SUBMIT VOTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitBtnComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#253237",
    width: wp("80%"),
    height: hp("10%"),
  },
  submitButton: {
    backgroundColor: "#5C6B73",
    width: wp("80%"),
    height: hp("4.5%"),
    justifyContent: "center",
    alignItems: "center",
    top: hp("5%"),
  },
  textStyleSubmit: {
    fontSize: hp("1.5%"),
    fontWeight: "600",
    color: "white",
  },
});
