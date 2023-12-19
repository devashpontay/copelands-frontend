import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackHeaderComponent from '../components/BackHeaderComponent'
import ListOfCandidatesComponent from '../components/ListOfCandidatesComponent';



const VotingSessionPage  = ({navigation, route}) => {
  const { candidateNames } = route?.params ?? { candidateNames: ["Candidate 1", "Candidate 2"] };
  console.log("Candidate Names:", candidateNames);
  console.log("Candidate Names in VotingSessionPage:", candidateNames);

    return (
      <View style={{flex: 1, backgroundColor: '#253237', alignItems: 'center', justifyContent: 'center'}}>
        {/* header */}
        <View>
            <BackHeaderComponent navigation={navigation}/>
            {/* Display ListOfCandidatesComponent */}
           <ListOfCandidatesComponent candidateNames={candidateNames} />
        </View>
      </View>
    )
  }

export default VotingSessionPage

const styles = StyleSheet.create({})