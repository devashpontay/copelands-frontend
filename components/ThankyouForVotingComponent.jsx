import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThankyouForVotingComponent = () => {
  return (
    <View style={styles.container}>
        {/* thank you for voting! label */}
        <View style={styles.thankyouContainer}>
            <Text style={styles.textTY}>Thank you for Voting!</Text>
        </View>
        <View style={styles.textCandidateContainer}>
            <Text style={styles.textCandidate}>Your candidates:</Text>
        </View>

        {/* display candidates choice */}
        <View>
            {/* First choice:
                First choice:  */}
        </View>
        
    </View>
  )
}

export default ThankyouForVotingComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253237',
        height: 200,
        width: 370,
        alignItems: 'center',
    },
    thankyouContainer: {
        backgroundColor: 'tomato',
        width: 370,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTY: {
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
    },
    textCandidateContainer:{
        right: 126,
        top: 18,

    },
    textCandidate: {
        color: 'white',
    },
})