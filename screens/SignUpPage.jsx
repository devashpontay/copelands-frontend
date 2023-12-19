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

  const animateLabel = (text, labelPosition) => {
    const newPosition = text === "" ? hp("2%") : hp("0%");
    Animated.timing(labelPosition, {
      toValue: newPosition,
      duration: 250,
      useNativeDriver: false,
    }).start();
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logoContainer}>
        {/* image */}
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textSign}>Sign Up</Text>
      </View>

      {/* main section */}
      <View style={styles.mainContainer}>
        {/* NAME */}
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
            // placeholder="Name"
            placeholderTextColor="grey"
            value={name}
            onFocus={() => animateNameLabelOnFocus(nameLabelPosition)}
            onBlur={() => animateLabelOnBlur(name, nameLabelPosition)}
            onChangeText={(text) =>
              handleInputChange(text, nameLabelPosition, setName)
            }
          />
        </View>

        {/* USERNAME */}
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
            style={styles.inputUsername}
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

        {/* PASSWORD */}
        <View style={styles.inputPasswordContainer}>
          <Animated.Text
            style={[
              styles.inputLabel,
              { top: passwordLabelPosition, left: wp("3%") },
            ]}
          >
            Password
          </Animated.Text>
          <TextInput
            style={styles.inputPassword}
            // placeholder="Password"
            placeholderTextColor="grey"
            value={password}
            onFocus={() => animatePasswordLabelOnFocus(passwordLabelPosition)}
            onBlur={() => animateLabelOnBlur(password, passwordLabelPosition)}
            onChangeText={(text) =>
              handleInputChange(text, passwordLabelPosition,  setPassword)
            }
            secureTextEntry={!showPassword}
          />
          {/* Eye icon for toggling password visibility */}
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <Image
              source={
                showPassword
                  ? require("../assets/image/eye-regular.png")
                  : require("../assets/image/eye-slash-regular.png")
              }
              style={styles.eyeIconImage}
            />
          </TouchableOpacity>
        </View>

        {/* button sign in */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmitPress}>
            <Text style={styles.textSignIn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* description */}
      <View style={styles.textAccContainer}>
        <Text style={styles.textAccount}>
          Already have an account?{" "}
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.textSignUp}>Login!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#253237",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: hp("6%"),
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
    height: hp("67%"),
    position: "absolute",
    alignItems: "center",
    bottom: hp("0%"),
  },
  textContainer: {
    position: "absolute",
    top: hp("25%"),
  },
  textSign: {
    fontSize: hp("6%"),
    color: "white",
    fontFamily: 'ibmPlexMono-bold'
  },
  inputNameContainer: {
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("1%"),
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
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("1%"),
    top: hp("11%"),
  },
  inputUsername: {
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
    marginTop: hp("1%"),
    marginLeft: wp("1%"),
  },
  inputPasswordContainer: {
    width: wp("75%"),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: wp("3%"),
    padding: hp("1%"),
    top: hp("14%"), 
    position: "relative",
  },
  inputPassword: {
    fontFamily: 'ibmPlexMono-bold',
    fontSize: hp("2%"),
    color: "black",
    marginTop: hp("1%"),
    marginLeft: wp("1%"),
  },
  inputLabel: {
    position: "absolute",
    fontSize: hp("2%"),
    fontFamily: 'ibmPlexMono-semiBold',
    color: "#5C6B73",
  },
  eyeIcon: {
    position: "absolute",
    right: wp("3%"),
    top: hp("2%"),
  },
  eyeIconImage: {
    width: wp("8%"),
    height: hp("3.5%"),
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: hp("18%"),
  },
  button: {
    backgroundColor: "#253237",
    width: wp("75%"),
    padding: hp("2.5%"),
    borderTopLeftRadius: hp("3.5%"),
    borderBottomLeftRadius: hp("3.5%"),
    borderBottomRightRadius: hp("3.5%"),
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
    bottom: hp("8%"),
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
});

export default SignUpPage;
