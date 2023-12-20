import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useReducer } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackHeaderComponent from "../components/BackHeaderComponent";
import ListOfCandidatesComponent from "../components/ListOfCandidatesComponent";
import {
  getAllVotesForElection,
  getOneElection,
  getVotesCount,
  isDoneVoting,
  markAsClosed,
  submitVote,
} from "../services/CopelandMethodService";
import { ScrollView } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import SubmitAndGetWinnerComponent from "../components/SubmitAndGetWinnerComponent";
import SubmitBtnComponent from "../components/SubmitBtnComponent";
import WinnerButtonComponent from "../components/WinnerButtonComponent";
import ThankyouForVotingComponent from "../components/ThankyouForVotingComponent";
import TheWinnerComponent from "../components/TheWinnerComponent";
import TheDeleteBtnComponent from "../components/TheDeleteBtnComponent";

const VotingSessionPage = ({ navigation, route }) => {
  const { onForceUpdate, ...election } = route.params;
  const [votingStatus, setVotingStatus] = useState(election.status);
  const [data, setData] = useState(() => {
    const data = election.candidates.map((candidate) => ({
      label: candidate,
      value: candidate.toLowerCase(),
    }));

    return data;
  });
  const [userChoices, setUserChoices] = useState(
    new Array(election.candidateCount)
  );
  const [isDone, setIsDone] = useState(undefined);
  const [numOfVotes, setNumOfVotes] = useState(0);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    isUserDoneVoting();
    votesCount();
  }, [reducerValue]);

  async function isUserDoneVoting() {
    try {
      const response = await isDoneVoting(election.idNo, election.sessionUser);
      setIsDone(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        console.log("IS USER DONE VOTING: NO");
      } else {
        console.log("IS USER DONE VOTING: YES");
      }
    }
  }

  async function votesCount() {
    try {
      const response = await getVotesCount(election.idNo);
      setNumOfVotes(response.data);
    } catch (error) {
      console.log("GET VOTES COUNT: " + error);
    }
  }

  function handleOnChange(value, index) {
    const temp = [...userChoices];
    temp[index] = value;
    setUserChoices(temp);
  }

  function generateDropDown(index) {
    return <></>;
  }

  async function handleSubmitPress() {
    // will trigger return yung condiitiion if may undefined sa array. Meaning, may dropdown field na hindi na fillupan si user
    if (userChoices.includes(undefined)) {
      return;
    }

    // will trigger return yung condiitiion if may duplicate sa array. Meaning, may dropdown na nag duplicate
    if (hasDuplicates(userChoices)) {
      return;
    }

    // else continue with submission

    // First need muna i lowercase yung election candidates para magamit as dependency ng transformedChoices
    const toLowerCaseElectionCandidates = election.candidates.map((candidate) =>
      candidate.toLowerCase()
    );
    // then transform ung userChoices into array of integers depending on the index choice in the candidates list
    const transformedChoices = userChoices.map((choice) =>
      toLowerCaseElectionCandidates.indexOf(choice)
    );

    const ballot = {
      voterUserName: election.sessionUser,
      electionIdNo: election.idNo,
      selectedCandidates: transformedChoices,
    };

    try {
      await submitVote(ballot);
      isUserDoneVoting();
      votesCount();
    } catch (error) {
      console.log("Submiting ballot: " + error);
    }
  }

  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }

  async function handleGetWinnerPress() {
    try {
      const response = await getAllVotesForElection(election.idNo);
      if (response.data.length === 0) {
        return;
      }

      await markAsClosed(election.idNo);
      setVotingStatus("CLOSED");
      onForceUpdate();
    } catch (error) {
      console.log("IN HANDLE GET WINNER PRESS FUNCTION" + error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#253237",
        alignItems: "center",
        paddingTop: 45,
      }}
    >
      {/* header */}
      <BackHeaderComponent
        navigation={navigation}
        moderator={election.moderator}
        numOfVotes={numOfVotes}
      />

      {/* MAIN CONTENT BELOW */}

      {/* FIRST SECTION */}
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ListOfCandidatesComponent candidateNames={election.candidates} />
      </View>

      {/* SECOND SECTION */}
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          paddingTop: 15,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {votingStatus === "CLOSED" ? (
          <TheWinnerComponent idNo={election.idNo} />
        ) : isDone ? (
          <ThankyouForVotingComponent
            candidates={election.candidates}
            userVotes={isDone.selectedCandidates}
          />
        ) : (
          // <Text>NIgga</Text>
          <ScrollView
            style={{
              width: "100%",
            }}
          >
            <View>
              {election.candidates.map(
                (candidiate, index) => (
                  <View key={index}>
                    <Text
                      key={index}
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      RANK {index + 1}
                    </Text>
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      containerStyle={styles.itemContainer}
                      visibleSelectedItem={true}
                      itemTextStyle={{ fontSize: 14 }}
                      data={data}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder="Select your candidate"
                      searchPlaceholder="Search..."
                      onChange={(item) => {
                        handleOnChange(item.value, index);
                      }}
                    />
                  </View>
                )
                // generateDropDown(index)
              )}
            </View>
          </ScrollView>
        )}
      </View>

      {/* THIRD SECTION */}
      <View
        style={{
          flex: 0.45,
          alignItems: "center",
          paddingTop: 15,
          width: "100%",
        }}
      >
        {election.sessionUser === election.moderator ? (
          votingStatus === "CLOSED" ? (
            <TheDeleteBtnComponent />
          ) : isDone ? (
            <WinnerButtonComponent getWinner={handleGetWinnerPress} />
          ) : (
            <SubmitAndGetWinnerComponent
              submit={handleSubmitPress}
              getWinner={handleGetWinnerPress}
            />
          )
        ) : (
          votingStatus === "OPEN" &&
          !isDone && <SubmitBtnComponent submit={handleSubmitPress} />
        )}
      </View>
    </View>
  );
};

export default VotingSessionPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    padding: 16,
  },
  itemContainer: {
    borderRadius: 15,
    backgroundColor: "#E0FBFC",
  },
  dropdown: {
    height: 50,
    borderColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
    color: "grey",
  },
  selectedTextStyle: {
    fontSize: 15,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 15,
    borderRadius: 15,
  },
});
