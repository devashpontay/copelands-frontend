import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackHeaderComponent from '../components/BackHeaderComponent'


const VotingSessionPage  = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#253237', alignItems: 'center', justifyContent: 'center'}}>
        {/* header */}
        <View>
            <BackHeaderComponent />
            {/* i want also display a Litof CandidatesComponets here */}
        </View>
      </View>
    )
  }

export default VotingSessionPage

const styles = StyleSheet.create({})