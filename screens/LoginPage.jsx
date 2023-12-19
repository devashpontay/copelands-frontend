import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { login } from "../services/CopelandMethodService";
import SignUpPage from "./SignUpPage";

const LoginPage = ({ navigation }) => {
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

  const animateLabelOnBlur = () => {
  };

  // const animatePasswordLabelOnBlur = () => {
  // };

  const animateLabel = (text, labelPosition) => {
    const newPosition = text === "" ? hp("2%") : hp("0%");
    Animated.timing(labelPosition, {
      toValue: newPosition,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInPress = () => {
    console.log(username, password);

    const user = {
      username,
      password,
    };

    login(user)
      .then((response) => {
        response.data &&
          navigation.navigate("MainPage", {
            moderator: username,
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUpPage')
  };

  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logoContainer}>
        {/* image */}
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.imageLogo}
        />
      </View>
      {/* main section */}
      <View style={styles.mainContainer}>
        {/* Your main content */}
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
            style={styles.input}
            // placeholder="Username"
            placeholderTextColor="grey"
            value={username}
            onFocus={() => animateUsernameLabelOnFocus(usernameLabelPosition)}
            onBlur={() => animateLabelOnBlur(username, usernameLabelPosition)}
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
            // placeholder="Password"
            placeholderTextColor="grey"
            value={password}
            onFocus={() => animatePasswordLabelOnFocus(passwordLabelPosition)}
            onBlur={() => animateLabelOnBlur(password, passwordLabelPosition)}
            onChangeText={(text) =>
              handleInputChange(text, passwordLabelPosition, setPassword)
            }
            secureTextEntry={!showPassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
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

        {/* footer */}
        <View style={styles.footer}></View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#253237",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: hp("10%"),
    alignItems: "center",
  },
  imageLogo: {
    width: wp("35%"),
    height: hp("18%"),
  },
  mainContainer: {
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    width: wp("100%"),
    height: hp("68%"),
    position: "absolute",
    alignItems: "center",
    bottom: 10,
  },
  footer: {
    backgroundColor: "black",
    width: "100%",
    height: hp("6%"),
    position: "absolute",
    alignItems: "center",
    top: hp("63%"),
  },
  textContainer: {
    position: "absolute",
    top: hp("5%"),
  },
  textLogin: {
    fontSize: hp("6%"),
    color: "black",
    fontFamily: 'ibmPlexMono-bold'
  },
  inputContainer: {
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("0.3%"),
    top: hp("18%"),
  },
  input: {
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
    marginLeft: wp("3%"),
  },
  inputContainerPass: {
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("0.3%"),
    top: hp("20%"),
  },
  inputPass: {
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
    marginLeft: wp("3%"),
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: hp("25%"),
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
    // fontFamily: 'ibmPlexMono-semiBold',
    color: "white",
  },
  textAccContainer: {
    // top: hp('31.7%'),
    position: "absolute",
    width: wp("100%"),
    bottom: hp("10%"),
    alignItems: "center",
  },
  textAccount: {
    fontSize: hp("2%"),
  },
  textSignUp: {
    fontSize: hp("2%"),
    textDecorationLine: "underline",
    color: "black",
    fontWeight: "600",
  },
  inputLabel: {
    // fontWeight: '600',
    fontFamily: 'ibmPlexMono-semiBold',
    color: "#5C6B73",
    fontSize: hp("2%"),
  },
});
