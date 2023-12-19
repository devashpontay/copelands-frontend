import React, { useEffect, useReducer, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import NewHeaderComponent from "../components/NewHeaderComponent";
import ElectionItemComponent from "../components/ElectionItemComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getAllElectionsByModerator } from "../services/CopelandMethodService";


const MainPage = ({ navigation, route }) => {
  const [moderator, setModerator] = useState(route.params);
  const [elections, setElections] = useState([]);
  // const [reRender, setReRender] = useState(0);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  console.log(moderator.moderator);

  useEffect(() => {
    getItems();
  }, [reducerValue]);

  const getItems = async () => {
    getAllElectionsByModerator(moderator.moderator)
      .then((response) => {
        setElections(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <View style={{ flex: 1, backgroundColor: "#253237" }}>
      {/* Header section */}
      <NewHeaderComponent forceUpdate={forceUpdate} moderator={moderator.moderator} navigation={navigation}/>

      {/* Election items section */}
      <GestureHandlerRootView style={styles.GHRW_container}>
        <FlatList
          data={elections}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
              console.log("Selected election item (mainpage):", item);
              console.log("Candidate Names:", item.candidates);
              navigation.navigate("VotingSessionPage", { candidateNames: item.candidates || [] });
            }}
            >
              <ElectionItemComponent
                navigation={navigation}
                user={moderator.moderator}
                idNo={item.idNo}
                category={item.category}
                title={item.title}
                status={item.status}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.idNo}
        />
      </GestureHandlerRootView>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  GHRW_container: {
    flex: 1,
    marginTop: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
});
