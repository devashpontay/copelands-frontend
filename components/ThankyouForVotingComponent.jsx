import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const ThankyouForVotingComponent = ({ candidates, userVotes }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(() => {
    const combined = candidates.map((name, index) => ({
      name,
      index: userVotes[index],
    }));

    combined.sort((a, b) => a.index - b.index);

    const sortedNames = combined.map((item) => item.name);

    return sortedNames;
  });

  return (
    <View style={styles.container}>
      {/* thank you for voting! label */}
      <View style={styles.thankyouContainer}>
        <Text style={styles.textTY}>Thank you for Voting!</Text>
      </View>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 15, color: "white" }}>
          Your selected candidates:
        </Text>
        <ScrollView>
          {selectedCandidate.map((name, index) => (
            <Text key={index} style={{ color: "white", marginBottom: 4 }}>
              RANK {index + 1}: {name}
            </Text>
          ))}
        </ScrollView>
      </View>
      {/* <View style={styles.textCandidateContainer}>
        <Text style={styles.textCandidate}>Your candidates:</Text>
      </View> */}
    </View>
  );
};

export default ThankyouForVotingComponent;

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    width: wp("90%"),
    flex: 1,
    // backgroundColor: "green",
  },
  thankyouContainer: {
    backgroundColor: "tomato",
    width: "100%",
    borderRadius: wp("5%"),
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },
  textTY: {
    fontSize: 20,
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
