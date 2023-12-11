import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ListOfCandidatesComponent = ({ candidateData }) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headercontainer}>
        <Text style={styles.textHeader}>List of Candidates</Text>
      </View>
      <ScrollView style={styles.candidatesContainer}>
        {candidateData?.map((candidate, index) => (
          <View key={index} style={styles.candidateChoice}>
            <Text style={styles.candidateText}>{`Candidate choice #${index + 1}: ${candidate}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const App = () => {
  const candidateData = ['John Doe', 'Jane Smith', 'Bob Johnson','alice', 'mark', 'ashley', 'Marin', 'jerry', 'Naomi Billonaa'];

  return (
    <View>
      {/* Other components or views if needed */}
      <ListOfCandidatesComponent candidateData={candidateData} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: hp('30%'), 
    width: wp('80%'), 
    alignItems: 'center',
  },
  headercontainer: {
    backgroundColor: 'white',
    paddingLeft: wp('1%'), 
    borderBottomWidth: wp('0.5%'),
    width: '100%',
    height: hp('5%'), 
    justifyContent: 'center',
  },
  candidatesContainer: {
    width: '100%',
    paddingHorizontal: wp('2%'), 
  },
  candidateChoice: {
    backgroundColor: '#F0F0F0',
    marginVertical: hp('1%'), 
    padding: wp('1%'), 
    borderRadius: wp('1%'), 
  },
  candidateText: {
    fontSize: hp('1.6%'), 
    color: '#333',
  },
  textHeader: {
    color: 'black',
    fontSize: hp('2.2%'), 
    fontWeight: '600',
    left: wp('1%'), 
  },
});
