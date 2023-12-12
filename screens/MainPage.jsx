import React, { useEffect, useReducer, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import NewHeaderComponent from "../components/NewHeaderComponent";
import ElectionItemComponent from "../components/ElectionItemComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getAllElectionsByModerator } from "../services/CopelandMethodService";

const MainPage = ({ navigation, route }) => {
  const [moderator, setModerator] = useState(route.params);
  const [elections, setElections] = useState([]);
  const [reRender, setReRender] = useState(0);

  console.log(moderator.moderator);

  useEffect(() => {
    getAllElectionsByModerator(moderator.moderator)
      .then((response) => {
        setElections(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reRender]);

  const _reRender = () => {
    setReRender(reRender + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#253237",
      }}
    >
      {/* Header section */}
      <NewHeaderComponent x={_reRender} />

      {/* Election items section */}
      <GestureHandlerRootView style={styles.GHRW_container}>
        <FlatList
          data={elections}
          renderItem={({ item }) => (
            <ElectionItemComponent
              navigation={navigation}
              category={item.category}
              title={item.title}
              status={item.status}
            />
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
