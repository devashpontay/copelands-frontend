import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    height: 280,
    width: 370,
    alignItems: 'center',
  },
  headercontainer: {
    backgroundColor: 'white',
    paddingLeft: 5,
    borderBottomWidth: 2,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  candidatesContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  candidateChoice: {
    backgroundColor: '#F0F0F0',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  candidateText: {
    fontSize: 16,
    color: '#333',
  },
  textHeader: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    left: 10,
  },
});
