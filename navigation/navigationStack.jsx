import React, { useState } from "react";
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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [moderator, setModerator] = useState("");

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
    "onAnimatedValueUpdate",
  ]);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isSignedIn ? (
          <>
            {/* FOR LOGGED IN USER */}
            <RootStack.Group>
              <RootStack.Screen name="MainPage" component={MainPage} initialParams={moderator}/>
              <RootStack.Screen
                name="VotingSessionPage"
                component={VotingSessionPage}
              />
            </RootStack.Group>

            {/* FOR MODAL NAV */}
            <RootStack.Group
              screenOptions={{
                presentation: "transparentModal",
                ...TransitionPresets.ModalTransition,
              }}
            >
              <RootStack.Screen
                name="NewDetailsForm"
                component={NewDetailsform}
              />
            </RootStack.Group>
          </>
        ) : (
          <>
            {/* FOR AUTHENTICATION */}
            <RootStack.Group>
              <RootStack.Screen
                name="LoginPage"
                component={LoginPage}
                initialParams={{ setIsSignedIn, setModerator }}
              />
              <RootStack.Screen name="SignUpPage" component={SignUpPage} />
            </RootStack.Group>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
