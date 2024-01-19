import React, { useEffect, useReducer, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import NewHeaderComponent from "../components/NewHeaderComponent";
import ElectionItemComponent from "../components/ElectionItemComponent";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import {
  getAllElectionsByModerator,
  getAllElectionsFromAllUsers,
} from "../services/CopelandMethodService";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";


const MainPage = ({ navigation, route }) => {
  const [moderator, setModerator] = useState(route.params);
  const [elections, setElections] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    getItems();
  }, [reducerValue]);

  const getItems = async () => {
    getAllElectionsFromAllUsers()
      .then((response) => {
        setElections(response.data);
      })
      .catch((error) => {
        console.log("GET ALL ELECTIONS FROM ALL USERS", error);
      });
  };

  function handleOnRefresh() {
    setIsFetching(true);
    getItems();
    setIsFetching(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#253237", paddingTop: 45 }}>
      {/* Header section */}
      <NewHeaderComponent
        forceUpdate={forceUpdate}
        moderator={moderator}
        navigation={navigation}
      />

      {/* Election items section */}
      <GestureHandlerRootView style={styles.GHRW_container}>
        {elections.length === 0 ? (
          <>
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No voting session created!</Text>
            </View>

            <ScrollView
              style={{ width: "100%" }}
              refreshControl={
                <RefreshControl
                  refreshing={isFetching}
                  onRefresh={handleOnRefresh}
                />
              }
            ></ScrollView>
          </>
        ) : (
          <FlatList
            style={{ borderRadius: wp("2%") }}
            data={elections}
            onRefresh={handleOnRefresh}
            refreshing={isFetching}
            renderItem={({ item }) => (
              <ElectionItemComponent
                navigation={navigation}
                onForceUpdate={forceUpdate}
                sessionUser={moderator}
                idNo={item.idNo}
                moderator={item.moderator}
                title={item.title}
                category={item.category}
                status={item.status}
                candidateCount={item.candidateCount}
                candidates={item.candidates}
                entryDate={item.entryDate}
              />
            )}
            keyExtractor={(item) => item.idNo}
          />
        )}
      </GestureHandlerRootView>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  GHRW_container: {
    flex: 1,
    marginTop: "10%",
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    position: "absolute",
    top: 290,
  },
  emptyText: {
    color: "#5C6B73",
    fontWeight: "bold",
    fontSize: 16,
  },
});
