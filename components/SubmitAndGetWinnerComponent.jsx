import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

const SubmitAndGetWinnerComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.textStyleSubmit}>SUBMIT VOTE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.winnerButton}>
        <Text style={styles.textStyleWinner}>GET WINNER</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SubmitAndGetWinnerComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253237',
        width: 370,
        height: 88,     
    },
    submitButton: {
        backgroundColor: '#5C6B73', 
        width: 370,
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    textStyleSubmit: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
    },
    winnerButton:{
        backgroundColor: '#5C6B73', 
        width: 370,
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',
        top: 9,
        
    },
    textStyleWinner: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
    },
})