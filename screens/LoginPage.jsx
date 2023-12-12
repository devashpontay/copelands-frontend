import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
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

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
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
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="grey"
            value={username}
            onChangeText={handleUsernameChange}
          />
        </View>

        <View style={styles.inputContainerPass}>
          <TextInput
            style={styles.inputPass}
            placeholder="Password"
            placeholderTextColor="grey"
            value={password}
            onChangeText={handlePasswordChange}
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
    top: hp("7%"),
  },
  textLogin: {
    fontSize: hp("6%"),
    color: "black",
    fontWeight: "600",
  },
  inputContainer: {
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("5%"),
    padding: hp("2%"),
    top: hp("18%"),
  },
  input: {
    fontSize: hp("2.5%"),
    color: "black",
  },
  inputContainerPass: {
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("5%"),
    padding: hp("2%"),
    top: hp("20%"),
  },
  inputPass: {
    fontSize: hp("2.5%"),
    color: "black",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: hp("25%"),
  },
  button: {
    backgroundColor: "#253237",
    width: wp("75%"),
    padding: hp("3%"),
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
    color: "blue",
    fontWeight: "600",
  },
});
