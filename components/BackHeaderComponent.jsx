import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BackHeaderComponent = ({ navigation, moderator, numOfVotes }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* first column */}

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 15,
            width: "50%",
          }}
          onPress={handleBackPress}
        >
          <Icon name="arrow-back-circle" size={wp("8%")} color="#9DB4C0" />
          <Text style={styles.headerText}>BACK</Text>

          {/* <View style={styles.iconBack}>
            <Icon name="arrow-back" size={hp("3%")} color="yellow" />
          </View>
          <View style={styles.backContainer}>
            <Text style={styles.headerText}>Back</Text>
          </View> */}
        </TouchableOpacity>
      </View>

      {/* Second column */}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
            paddingLeft: 25,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>
            <Text style={{ fontWeight: "bold" }}>MODERATOR:</Text> {moderator}
          </Text>
          <Text style={{ color: "white", fontSize: 10 }}>
            <Text style={{ fontWeight: "bold" }}>TOTAL VOTES:</Text>{" "}
            {numOfVotes}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#5C6B73",
    height: hp("7%"),
    width: wp("100%"),
  },
  backContainer: {},

  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginLeft: 2.5,
  },
  iconBack: {
    width: hp("5%"),
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp("3%"),
  },
});

export default BackHeaderComponent;
