import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

const TheDeleteBtnComponent = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle}>DELETE ELECTION</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default TheDeleteBtnComponent


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#5C6B73', 
      width: 370,
      height: 40,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '600',
      color: 'white', 
    },
  });
  