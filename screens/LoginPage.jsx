import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { login } from "../services/CopelandMethodService";
import SignUpPage from "./SignUpPage";


const {height, width} = Dimensions.get('window');

const LoginPage = ({ navigation, route }) => {
  const { setIsSignedIn, setModerator, ...rest } = route.params;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameLabelPosition] = useState(new Animated.Value(hp("2%")));
  const [passwordLabelPosition] = useState(new Animated.Value(hp("2%")));

  const handleInputChange = (text, labelPosition, setStateFunction) => {
    // Update the input value
    setStateFunction(text);

    // Animate the label position when the user starts typing
    animateLabel(text, labelPosition);
  };

  const animateUsernameLabelOnFocus = () => {
    Animated.timing(usernameLabelPosition, {
      toValue: hp("0%"),
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const animatePasswordLabelOnFocus = () => {
    Animated.timing(passwordLabelPosition, {
      toValue: hp("0%"),
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const animateLabelOnBlur = () => { };

  const animateLabel = (text, labelPosition) => {
    const newPosition = text === "" ? hp("2%") : hp("0%");
    Animated.timing(labelPosition, {
      toValue: newPosition,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const handleUsernameChange = (text) => {
    handleInputChange(text, usernameLabelPosition, setUsername);
  };

  const handlePasswordChange = (text) => {
    handleInputChange(text, passwordLabelPosition, setPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInPress = () => {
    const user = {
      username,
      password,
    };

    login(user)
      .then((response) => {
        setModerator(username);
        setIsSignedIn(response.data);
      })
      .catch((err) => {
        console.log("USER LOGIN: ", err);
      });
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUpPage");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={{
        paddingTop: hp("8%"),
      }}>
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.imageLogo}
        />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          <View style={{
            marginTop: hp("4%"),
            width: wp("100%"),
            height: hp("75%"),
            borderTopLeftRadius: hp("6%"),
            backgroundColor: "white",
            alignItems: "center",
          }}>

            <View style={{
              flex: 1,
              padding: hp("2%"),
              width: wp("100%"),
              alignItems: "center",
              marginTop: hp("2%"),
              // backgroundColor: 'yellow',
            }}>
              <Text style={styles.textLogin}>Login</Text>
            </View>

            <View style={{
              flex: 1,
              width: wp("100%"),
              alignItems: "center",
              paddingTop: hp("2%"),
              paddingBottom: hp("1%"),
              // backgroundColor: "red",
            }}>
              <View style={{
                width: wp("80%"),
                borderWidth: 1,
                borderColor: "black",
                borderRadius: wp("3%"),
                padding: hp("2%"),
              }}>
                <Animated.Text
                  style={[
                    styles.inputLabel,
                    { top: usernameLabelPosition, left: wp("3%") },
                  ]}
                >
                  Username
                </Animated.Text>
                <TextInput
                  style={{
                    fontFamily: "ibmPlexMono-bold",
                    fontSize: hp("2%"),
                    color: "black",
                  }}
                  placeholderTextColor="grey"
                  value={username}
                  onFocus={() =>
                    animateUsernameLabelOnFocus(usernameLabelPosition)
                  }
                  onBlur={() =>
                    animateLabelOnBlur(username, usernameLabelPosition)
                  }
                  onChangeText={(text) =>
                    handleInputChange(text, usernameLabelPosition, setUsername)
                  }
                />
              </View>
            </View>


            <View style={{
              flex: 1,
              width: wp("100%"),
              alignItems: "center",
            }}>
              <View style={{
                width: wp("80%"),
                borderWidth: 1,
                borderColor: "black",
                borderRadius: wp("3%"),
                padding: hp("2%"),
              }}>
                <Animated.Text
                  style={[
                    styles.inputLabel,
                    { top: passwordLabelPosition, left: wp("3%") },
                  ]}
                >
                  Password
                </Animated.Text>
                <TextInput
                  style={{
                    fontFamily: "ibmPlexMono-bold",
                    fontSize: hp("2%"),
                    color: "black",
                  }}
                  placeholderTextColor="grey"
                  value={password}
                  onFocus={() =>
                    animatePasswordLabelOnFocus(passwordLabelPosition)
                  }
                  onBlur={() =>
                    animateLabelOnBlur(password, passwordLabelPosition)
                  }
                  onChangeText={(text) =>
                    handleInputChange(text, passwordLabelPosition, setPassword)
                  }
                  secureTextEntry={!showPassword}
                />
              </View>
            </View>


            <View style={{
              flex: 1,
              width: wp("100%"),
              padding: hp("4%"),
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'lime',
            }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#253237",
                  width: wp("75%"),
                  padding: hp("2%"),
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: wp("10%"),
                  borderBottomRightRadius: wp("10%"),
                  borderBottomLeftRadius: wp("10%"),
                }}
                onPress={handleSignInPress}
              >
                <Text style={{
                  fontWeight: "600",
                  color: "white",
                }}>Sign in</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              flex: 1,
              padding: hp("4%"),
              width: wp("100%"),
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'tomato',
            }}>
              <Text style={{
                fontSize: hp("1.8%"),
              }}>
                Don't have an account?{" "}
                <TouchableOpacity onPress={handleSignUpPress}>
                  <Text style={{
                    fontSize: hp("2%"),
                    textDecorationLine: "underline",
                    color: "black",
                    fontWeight: "600",
                  }}>Sign up!</Text>
                </TouchableOpacity>
              </Text>
            </View>

            <View style={styles.footer}></View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#253237",
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  textLogin: {
    fontSize: hp("6%"),
    color: "black",
    fontFamily: "ibmPlexMono-bold",
  },
  inputLabel: {
    position: "absolute",
    fontSize: hp("1.8%"),
    color: "#5C6B73",
    fontFamily: "ibmPlexMono-bold",
  },
  footer: {
    flex: 1,
    backgroundColor: "black",
    width: wp("100%"),
    alignItems: "center",
  },
});

export default LoginPage;
