import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ElectionItemComponent = ({
  navigation,
  onForceUpdate,
  sessionUser,
  idNo,
  moderator,
  title,
  category,
  status,
  candidateCount,
  candidates,
  entryDate,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("VotingSessionPage", {
            onForceUpdate,
            sessionUser,
            idNo,
            moderator,
            title,
            category,
            status,
            candidateCount,
            candidates,
          })
        }
        style={{
          backgroundColor: "#E0FBFC",
          width: wp("90%"),
          flex: 1,
          marginBottom: hp("2%"),
          borderRadius: wp("2%"),
        }}
      >
        {/* container*/}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingTop: hp("1.5%"),
            alignItems: "center",
          }}
        >
          {/* first colum */}
          <View
            style={{
              flex: 1,
              marginLeft: wp("4%"),
              paddingRight: wp("2.5%"),
              justifyContent: "center",
            }}
          >
            <Text style={styles.textPlace}>{category}</Text>
          </View>

          {/* second column */}
          <View
            style={{
              flexDirection: "row",
              marginRight: wp("3.5%"),
            }}
          >
            <Icon
              name="circle"
              size={hp("2%")}
              color={status === "OPEN" ? "green" : "red"}
            />
            <Text style={styles.openText}> {status}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            padding: wp("2%"),
            paddingLeft: wp("4%"),
            justifyContent: "center",
          }}
        >
          <Text style={styles.textStyle}>{title}</Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingLeft: wp("4%"),
            paddingTop: hp("0.5%"),
            paddingBottom: hp("1.5%"),

            // backgroundColor: "yellow"
          }}
        >
          <Text style={styles.timeStyle}>
            {`Started - ${(() => {
              const dateObject = new Date(entryDate);

              const formattedDate = dateObject.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              const formattedTime = dateObject.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });

              return `${formattedDate} at ${formattedTime}`;
            })()}`}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ElectionItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  // boxContainer: {
  //   backgroundColor: "#E0FBFC",
  //   padding: wp("4%"),
  //   width: wp("90%"),
  //   minHeight: hp("15%"),
  //   alignItems: "flex-start",
  //   justifyContent: "center",
  //   borderWidth: 1,
  //   borderRadius: wp("2%"),
  //   borderColor: "#5C6B73",
  //   marginBottom: hp("2%"),
  // },
  // rowContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   bottom: hp("2%"),
  // },
  textStyle: {
    fontSize: hp("2.3%"),
    fontWeight: "bold",
  },
  // placeContainer: {
  //   flexDirection: "row",
  //   alignItems: "flex-start",
  // },
  textPlace: {
    fontSize: hp("1.5%"),
    color: "#A3A3A3",
    fontWeight: "bold",
  },
  openText: {
    fontSize: hp("1.5%"),
    color: "#A3A3A3",
    marginLeft: wp("0.25%"),
    fontWeight: "bold",
  },
  timeStyle: {
    fontSize: hp("1.5%"),
    color: "#A3A3A3",
    fontWeight: "bold",
  },
});
