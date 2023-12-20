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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { login } from "../services/CopelandMethodService";
import SignUpPage from "./SignUpPage";

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

  const animateLabelOnBlur = () => {};

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
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.imageLogo}
        />
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textLogin}>Login</Text>
            </View>

            <View style={styles.inputContainer}>
              <Animated.Text
                style={[
                  styles.inputLabel,
                  { top: usernameLabelPosition, left: wp("3%") },
                ]}
              >
                Username
              </Animated.Text>
              <TextInput
                style={styles.textInput}
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

            <View style={styles.inputContainerPass}>
              <Animated.Text
                style={[
                  styles.inputLabel,
                  { top: passwordLabelPosition, left: wp("3%") },
                ]}
              >
                Password
              </Animated.Text>
              <TextInput
                style={styles.inputPass}
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

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSignInPress}
              >
                <Text style={styles.textSignIn}>Sign in</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.textAccContainer}>
              <Text style={styles.textAccount}>
                Don't have an account?{" "}
                <TouchableOpacity onPress={handleSignUpPress}>
                  <Text style={styles.textSignUp}>Sign up!</Text>
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

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#253237",
  },
  logoContainer: {
    position: "absolute",
    top: hp("10%"),
    alignItems: "center",
  },
  mainContainer: {
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    width: wp("100%"),
    height: hp("68%"),
    alignItems: "center",
    top: 150,
  },
  textContainer: {
    top: hp("5%"),
  },
  textLogin: {
    fontSize: hp("6%"),
    color: "black",
    fontFamily: "ibmPlexMono-bold",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  inputContainer: {
    width: wp("80%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("2%"),
    top: hp("10%"),
  },
  textInput: {
    fontFamily: "ibmPlexMono-bold",
    fontSize: hp("2%"),
    color: "black",
  },
  inputLabel: {
    position: "absolute",
    fontSize: hp("1.8%"),
    color: "#5C6B73",
    fontFamily: "ibmPlexMono-bold",
  },
  inputContainerPass: {
    width: wp("80%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("2%"),
    top: hp("12%"),
  },
  inputPass: {
    fontFamily: "ibmPlexMono-bold",
    fontSize: hp("2%"),
    color: "black",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: hp("16%"),
  },
  button: {
    backgroundColor: "#253237",
    width: wp("75%"),
    padding: hp("2.5%"),
    borderTopLeftRadius: wp("10%"),
    borderBottomLeftRadius: wp("10%"),
    borderBottomRightRadius: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  textSignIn: {
    fontWeight: "600",
    color: "white",
  },
  textAccContainer: {
    position: "absolute",
    width: wp("100%"),
    bottom: hp("15%"),
    alignItems: "center",
  },
  textAccount: {
    fontSize: hp("1.8%"),
  },
  textSignUp: {
    fontSize: hp("2%"),
    textDecorationLine: "underline",
    color: "black",
    fontWeight: "600",
  },
  footer: {
    backgroundColor: "black",
    width: "100%",
    height: hp("6.5%"),
    position: "absolute",
    alignItems: "center",
    top: hp("61%"),
  },
});
