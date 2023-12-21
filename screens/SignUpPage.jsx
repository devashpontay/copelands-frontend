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
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { register } from "../services/CopelandMethodService";

const {height, width} = Dimensions.get('window');
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
        // console.log(response.data);
      })
      .catch((err) => {
        console.log("REGISTER USER: ", err);
      });
  };

  const handleLoginPress = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: "#253237",
      }}>
      <View style={{
        // flex: 1,
        paddingTop: hp("8%"),
        alignItems: "center",

      }}>
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.imageLogo}
        />
      </View>

      <View style={{
        // backgroundColor: 'red',
        paddingTop: hp("2%"),
        paddingBottom: hp("5.5%"),
        alignItems: "center",
        // justifyContent:'center',
      }}>
        <Text style={{
          fontSize: hp("6%"),
          color: "white",
          fontFamily: 'ibmPlexMono-bold'
        }}>Sign Up</Text>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{
          flex: 1,
          justifyContent: 'space-around',
        }}>
          <View style={{
            marginTop: hp("2%"),
            width: wp("100%"),
            height: hp("68%"),
            borderTopLeftRadius: hp("6%"),
            backgroundColor: "white",
            alignItems: "center",
          }}>

            <View style={{
              flex: 1,
              width: wp("100%"),
              alignItems: "center",
              paddingTop: hp("4%"),
              marginTop: hp("3%"),
              // backgroundColor: 'violet',
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
                    { top: nameLabelPosition, left: wp("3%") },
                  ]}
                >
                  Name
                </Animated.Text>
                <TextInput
                  style={{
                    fontFamily: "ibmPlexMono-bold",
                    fontSize: hp("2%"),
                    color: "black",
                    // backgroundColor: 'red',
                    // paddingTop: hp("2%"),
                  }}
                  placeholderTextColor="grey"
                  value={name}
                  onFocus={() =>
                    animateNameLabelOnFocus(nameLabelPosition)
                  }
                  onBlur={() =>
                    animateLabelOnBlur(name, nameLabelPosition)
                  }
                  onChangeText={(text) =>
                    handleInputChange(text, nameLabelPosition, setName)
                  }
                />
              </View>
            </View>

            <View style={{
              flex: 1,
              width: wp("100%"),
              alignItems: "center",
              paddingTop: hp("2%"),
              paddingBottom: hp("2%"),
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
              // backgroundColor: 'blue',
              paddingBottom: hp("4%"),
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
              padding: hp("2%"),
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
                onPress={handleSubmitPress}
              >
                <Text style={{
                  fontWeight: "600",
                  color: "white",
                }}>Sign in</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              flex: 1,
              padding: hp("2%"),
              width: wp("100%"),
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'tomato',
            }}>
              <Text style={{
                fontSize: hp("1.8%"),
              }}>
                Don't have an account?{" "}
                <TouchableOpacity onPress={handleLoginPress}>
                  <Text style={{
                    fontSize: hp("2%"),
                    textDecorationLine: "underline",
                    color: "black",
                    fontWeight: "600",
                  }}>Login!</Text>
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
  inputLabel: {
    position: "absolute",
    fontSize: hp("1.8%"),
    color: "#5C6B73",
    fontFamily: "ibmPlexMono-bold",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    width: wp("100%"),
    alignItems: "center",
    padding: hp("1%"),
  },
});

export default SignUpPage;