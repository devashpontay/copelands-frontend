import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (text) => {
        setName(text);
      };
      
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
      <View style={styles.textContainer}>
            <Text style={styles.textLogin}>Sign Up</Text>
        </View>

         {/* main section */}
      <View style={styles.mainContainer}>
        {/* NAME */}
        <View style={styles.inputNameContainer}>
          <TextInput
            style={styles.inputName}
            placeholder="Name"
            placeholderTextColor="grey"
            value={name}
            onChangeText={handleNameChange}
            />
        </View>
        {/* USERNAME */}
        <View style={styles.inputUsernameContainer}>
          <TextInput
            style={styles.inputUsername}
            placeholder="Username"
            placeholderTextColor="grey"
            value={username}
            onChangeText={handleUsernameChange}
            />
        </View>

        {/* PASSWORD */}
        <View style={styles.inputPasswordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            placeholderTextColor="grey"
            value={password}
            onChangeText={handlePasswordChange}
            />
        </View>

        {/* button sign in */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textSignIn}>Sign in</Text>
            </TouchableOpacity>
        </View>
      </View>
      {/* description */}
      <View style={styles.textAccContainer}>
          <Text style={styles.textAccount}>
            Already have an account?{" "}
            <TouchableOpacity onPress={handleSignUpPress}>
              <Text style={styles.textSignUp}>Login!</Text>
            </TouchableOpacity>
          </Text>
        </View>
    </View>
  );
};

export default SignUpPage;

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
    width: "100%",
    height: "64%",
    position: 'absolute', 
    alignItems: 'center',
    bottom: 4,
  },
  textContainer:{
    position: 'absolute', 
    top: 230,
  },
  textLogin: {
    fontSize: 51,
    color: 'white',
    fontWeight: '600',
  },
  inputNameContainer: {
    width: '75%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    top: 65,
  },
  inputName: {
    fontSize: 18,
    color: 'black',
  },
  inputUsernameContainer: {
    width: '75%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    top: 90,
  },
  inputUsername: {
    fontSize: 18,
    color: 'black',
  },
  inputPasswordContainer: {
    width: '75%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    top: 114,
  },
  inputPassword: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 150,
  },
  button: {
    backgroundColor: '#253237',
    width: 309,
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
