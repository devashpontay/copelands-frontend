import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ThankyouForVotingComponent = () => {
  return (
    <View style={styles.container}>
      {/* thank you for voting! label */}
      <View style={styles.thankyouContainer}>
        <Text style={styles.textTY}>Thank you for Voting!</Text>
      </View>
      <View style={styles.textCandidateContainer}>
        <Text style={styles.textCandidate}>Your candidates:</Text>
      </View>

      {/* display candidates choice */}
      <View>
        {/* First choice:
                First choice:  */}
      </View>
    </View>
  );
};

export default ThankyouForVotingComponent;

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    width: wp("85%"),
    alignItems: "center",
  },
  thankyouContainer: {
    backgroundColor: "tomato",
    width: wp("85%"),
    height: hp("8%"),
    borderRadius: wp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  textTY: {
    fontSize: hp("3%"),
    color: "white",
    fontWeight: "600",
  },
  textCandidateContainer: {
    right: wp("25%"),
    top: hp("2%"),
  },
  textCandidate: {
    color: "white",
  },
});
