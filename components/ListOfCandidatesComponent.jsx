import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PropTypes from "prop-types";

const ListOfCandidatesComponent = ({ candidateNames }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headercontainer}>
        <Text style={styles.textHeader}>List of Choices</Text>
      </View>
      <ScrollView style={styles.candidatesContainer}>
        {candidateNames?.map((candidate, index) => (
          <View key={index} style={styles.candidateChoice}>
            <Text style={styles.candidateText}>{`${
              index + 1
            }. ${candidate}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

ListOfCandidatesComponent.propTypes = {
  candidateNames: PropTypes.array,
};

export default ListOfCandidatesComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: hp("30%"),
    width: wp("90%"),
    alignItems: "center",
    bottom: hp("25%"),
    marginLeft: wp("5%"),
  },
  headercontainer: {
    backgroundColor: "white",
    paddingLeft: wp("1%"),
    borderBottomWidth: wp("0.5%"),
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
  },
  candidatesContainer: {
    width: "100%",
    paddingHorizontal: wp("2%"),
  },
  candidateChoice: {
    backgroundColor: "#F0F0F0",
    marginVertical: hp("1%"),
    padding: wp("1%"),
    borderRadius: wp("1%"),
  },
  candidateText: {
    fontSize: hp("1.6%"),
    color: "#333",
  },
  textHeader: {
    color: "black",
    fontSize: hp("2.2%"),
    fontWeight: "600",
    left: wp("1%"),
  },
});
