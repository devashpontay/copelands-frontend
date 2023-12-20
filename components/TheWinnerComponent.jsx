import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { getWinner } from "../services/CopelandMethodService";

const Item = ({ winnerName }) => {
  return (
    <View style={styles.container}>
      {/* winner display */}
      <View style={styles.displayContainer}>
        <Text style={styles.textWinner}>The winner is: {winnerName}</Text>
      </View>
    </View>
  );
};

const TheWinnerComponent = ({ idNo }) => {
  const [winner, setWinner] = useState("");
  const fetchingStatus = "Fetching...";

  useEffect(() => {
    getTheWinner();
  }, []);

  async function getTheWinner() {
    try {
      const response = await getWinner(idNo);
      setWinner(response.data);
    } catch (error) {
      console.log("GETTING WINNER: " + error);
    }
  }

  return (
    <View>
      {winner ? (
        <Item winnerName={winner} />
      ) : (
        <Item winnerName={fetchingStatus} />
      )}
    </View>
  );
};

export default TheWinnerComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: wp("90%"),
    height: hp("8%"),
    justifyContent: "center",
  },
  textWinner: {
    fontSize: hp("2.2%"),
    color: "white",
    fontWeight: "600",
    marginLeft: wp("3%"),
  },
});
