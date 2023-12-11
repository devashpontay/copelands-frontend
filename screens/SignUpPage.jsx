import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        <Text style={styles.textSign}>Sign Up</Text>
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
    top: hp('6%'), 
    alignItems: 'center',
  },
  imageLogo: {
    width: wp('35%'), 
    height: hp('18%'), 
  },
  mainContainer: {
    borderTopLeftRadius: 50,
    backgroundColor: '##d9d9d9',
    width: wp('100%'), 
    height: hp('65%'), 
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },
  textContainer: {
    position: 'absolute',
    top: hp('25%'), 
  },
  textSign: {
    fontSize: hp('6%'), 
    color: 'white',
    fontWeight: '600',
  },
  inputNameContainer: {
    width: wp('75%'), 
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: hp('1.5%'), 
    top: hp('8%'), 
  },
  inputName: {
    fontSize: hp('2%'), 
    color: 'black',
  },
  inputUsernameContainer: {
    width: wp('75%'), 
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: hp('1.5%'), 
    top: hp('11%'), 
  },
  inputUsername: {
    fontSize: hp('2%'), 
    color: 'black',
  },
  inputPasswordContainer: {
    width: wp('75%'), 
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: hp('1.5%'), 
    top: hp('14%'), 
  },
  inputPassword: {
    fontSize: hp('2%'), 
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('18%'), 
  },
  button: {
    backgroundColor: '#253237',
    width: wp('75%'), 
    padding: hp('2.5%'), 
    borderTopLeftRadius: hp('3.5%'), 
    borderBottomLeftRadius: hp('3.5%'), 
    borderBottomRightRadius: hp('3.5%'), 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignIn: {
    fontWeight: '600',
    color: 'white',
  },
  textAccContainer: {
    position: 'absolute',
    width: wp('100%'),
    bottom: hp('8%'),
    alignItems: 'center',
    // top: hp('38%'), 
  },
  textAccount: {
    fontSize: hp('2%'), 
  },
  textSignUp: {
    fontSize: hp('2%'), 
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: '600',
  },
});
