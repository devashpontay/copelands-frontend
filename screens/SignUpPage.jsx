import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { register } from "../services/CopelandMethodService";

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nameLabelPosition] = useState(new Animated.Value(hp("2%")));
  const [usernameLabelPosition] = useState(new Animated.Value(hp("2%")));
  const [passwordLabelPosition] = useState(new Animated.Value(hp("2%")));

  const handleInputChange = (text, labelPosition, setStateFunction) => {
    // Update the input value
    setStateFunction(text);

    // Animate the label position when the user starts typing
    animateLabel(text, labelPosition);
  };

  const animateNameLabelOnFocus = () => {
    Animated.timing(nameLabelPosition, {
      toValue: hp("0%"),
      duration: 250,
      useNativeDriver: false,
    }).start();
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

  const animateLabel = (text, labelPosition) => {
    const newPosition = text === "" ? hp("2%") : hp("0%");
    Animated.timing(labelPosition, {
      toValue: newPosition,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const handleSubmitPress = () => {
    const user = {
      name,
      username,
      password,
    };

    register(user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginPress = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textSign}>Sign Up</Text>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.mainContainer}>


            <View style={styles.inputNameContainer}>
              <Animated.Text
                style={[
                  styles.inputLabel,
                  { top: nameLabelPosition, left: wp("3%") },
                ]}
              >
                Name
              </Animated.Text>
              <TextInput
                style={styles.inputName}
                placeholderTextColor="grey"
                value={name}
                onFocus={() => animateNameLabelOnFocus(nameLabelPosition)}
                onBlur={() => animateLabelOnBlur(name, nameLabelPosition)}
                onChangeText={(text) =>
                  handleInputChange(text, nameLabelPosition, setName)
                }
              />
            </View>

            <View style={styles.inputUsernameContainer}>
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
              <TouchableOpacity style={styles.button} onPress={handleSubmitPress}>
                <Text style={styles.textSignIn}>Sign in</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.textAccContainer}>
              <Text style={styles.textAccount}>
                Already have an account?{" "}
                <TouchableOpacity onPress={handleLoginPress}>
                  <Text style={styles.textSignUp}>Login!</Text>
                </TouchableOpacity>
              </Text>
            </View>

          </View>



          {/* <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View> */}

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

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
  textContainer: {
    position: "absolute",
    top: hp("27%"),
  },
  textSign: {
    fontSize: hp("6%"),
    color: "white",
    fontFamily: 'ibmPlexMono-bold'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  mainContainer: {
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    width: wp("100%"),
    height: hp("67%"),
    alignItems: "center",
    top: hp("23%"),
  },
  inputLabel: {
    position: 'absolute',
    fontSize: hp("1.8%"),
    color: '#5C6B73',
    fontFamily: 'ibmPlexMono-bold',
  },
  inputNameContainer: {
    width: wp("80%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("2%"),
    top: hp("8%"),
  },
  inputName: {
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
    marginTop: hp("1%"),
    marginLeft: wp("1%"),
  },
  inputUsernameContainer: {
    width: wp("80%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("2%"),
    top: hp("10%"),
  },
  textInput: {
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
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
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: hp("15%"),
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

});


export default SignUpPage;