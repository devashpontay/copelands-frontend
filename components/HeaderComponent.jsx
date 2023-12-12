import React from "react";
import { View } from "react-native";

const HeaderComponent = ({ leftItem, rightItem }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 80,
        backgroundColor: "blue",
        marginTop: 50,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {leftItem}
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {rightItem}
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
