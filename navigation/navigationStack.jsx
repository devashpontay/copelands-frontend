import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../screens/MainPage";
import VotingSessionPage from "../screens/VotingSessionPage";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import NewDetailsform from "../components/NewDetailsform";
import { LogBox } from "react-native";

const RootStack = createStackNavigator();

export default function Navigator() {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginPage"
      >
        <RootStack.Group>
          <RootStack.Screen name="LoginPage" component={LoginPage} />
          <RootStack.Screen name="SignUpPage" component={SignUpPage} />
          <RootStack.Screen name="MainPage" component={MainPage} />
          <RootStack.Screen
            name="VotingSessionPage"
            component={VotingSessionPage}
          />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: "transparentModal",
            ...TransitionPresets.ModalTransition,
          }}
        >
          <RootStack.Screen name="NewDetailsForm" component={NewDetailsform} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

