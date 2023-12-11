import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Test from "./utils/Test";
import HeaderComponent from "./components/HeaderComponent";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import MainPage from "./screens/MainPage";
import NewHeaderComponent from "./components/NewHeaderComponent";

export default function App() {
  return (
    // <MainPage />
    <Test />
    // <View style={{ flex: 1, backgroundColor: "black" }}>
    //   <HeaderComponent
    //     leftItem={
    //       <Button
    //         title="Back"
    //         color="white"
    //         accessibilityLabel="Learn more about this purple button"
    //       />
    //     }
    //     rightItem={<Text>Hello world</Text>}
    //   />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
