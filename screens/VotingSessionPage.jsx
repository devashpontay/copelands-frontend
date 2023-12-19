import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackHeaderComponent from "../components/BackHeaderComponent";
import ListOfCandidatesComponent from "../components/ListOfCandidatesComponent";
import { getOneElection } from "../services/CopelandMethodService";

const VotingSessionPage = ({ navigation, route }) => {
  const { user, idNo } = route.params;
  const [election, setElection] = useState({});

  useEffect(() => {
    getOneElection(idNo)
      .then((response) => {
        setElection(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#253237",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* header */}
      <View>
        <BackHeaderComponent navigation={navigation} />
        {/* Display ListOfCandidatesComponent */}
        <ListOfCandidatesComponent candidateNames={election.candidates}/>
      </View>
    </View>
  );
};

export default VotingSessionPage;

const styles = StyleSheet.create({});
