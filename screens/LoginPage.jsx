import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignUpPress = () => {
    // Handle the click event for "Sign up!"
    console.log("Sign up! pressed");
    // Add navigation logic or other actions as needed
  };

  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logoContainer}>
        {/* image */}
        <Image
          source={require('../assets/image/logo.png')}
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
          <TouchableOpacity style={styles.button}>
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
    backgroundColor: '#253237',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 90,
    alignItems: 'center',
  },
  imageLogo: {
    width: 130,
    height: 130,
  },
  mainContainer: {
    borderTopLeftRadius: 50,
    backgroundColor: 'white',
    width: '100%',
    height: 633,
    position: 'absolute',
    alignItems: 'center',
    top: 260,
  },
  footer: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    top: 587,
  },
  textContainer: {
    position: 'absolute',
    top: 80,
  },
  textLogin: {
    fontSize: 40,
    color: 'black',
  },
  inputContainer: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    top: 180,
  },
  input: {
    fontSize: 18,
    color: 'black',
  },
  inputContainerPass: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    top: 200,
  },
  inputPass: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 238,
  },
  button: {
    backgroundColor: '#253237',
    width: 288,
    padding: 23,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignIn: {
    fontWeight: '600',
    color: 'white',
  },
  textAccContainer: {
    top: 317,
  },
  textAccount: {
    fontSize: 15,
  },
  textSignUp: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: 'blue', 
    fontWeight: '600',
  },
});
