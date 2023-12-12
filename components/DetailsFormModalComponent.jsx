import React, { useState } from "react";

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DetailsFormModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [numCandidates, setNumCandidates] = useState(""); // Set initial value to ''
  const [candidates, setCandidates] = useState(
    Array.from({ length: 0 }, () => "")
  );

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setCategory("");
    setNumCandidates("");
    setCandidates(Array.from({ length: 0 }, () => ""));
  };

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleCategoryChange = (text) => {
    setCategory(text);
  };

  const handleNumCandidatesChange = (text) => {
    setNumCandidates(text);
    setCandidates(Array.from({ length: parseInt(text, 10) || 0 }, () => ""));
  };

  const handleCandidateChange = (text, index) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index] = text;
    setCandidates(updatedCandidates);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.headerContainer}>
              <Text style={styles.textHeader}>
                Fill out voting details form
              </Text>
              <View style={styles.iconContainerX}>
                <TouchableOpacity onPress={closeModal}>
                  <Icon name="times-circle" size={30} color="#5C6B73" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.fillUpContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>Title</Text>
                <View style={styles.inputContainerTitle}>
                  <TextInput
                    style={styles.inputTitle}
                    placeholderTextColor="#5C6B73"
                    placeholder="Enter a title not exceeding 46 letters"
                    value={title}
                    onChangeText={handleTitleChange}
                  />
                </View>
              </View>

              <View style={styles.categoryContainer}>
                <Text style={styles.textCategory}>Category</Text>
                <View style={styles.inputContainerCategory}>
                  <TextInput
                    style={styles.inputCategory}
                    placeholderTextColor="#5C6B73"
                    placeholder="Example: FOOD, ELECTION, MOVIE..."
                    value={category}
                    onChangeText={handleCategoryChange}
                  />
                </View>
              </View>

              <View style={styles.candidateContainer}>
                <Text style={styles.textCandidate}>Number of Candidates</Text>
                <View style={styles.inputContainerCandidate}>
                  <TextInput
                    style={styles.inputCandidate}
                    placeholderTextColor="#5C6B73"
                    placeholder="Example: 2"
                    keyboardType="numeric"
                    value={numCandidates}
                    onChangeText={handleNumCandidatesChange}
                  />
                </View>
              </View>
            </View>

            <View style={styles.lineSeparator}></View>

            <View style={styles.namesContainer}>
              {Array.from(
                { length: parseInt(numCandidates, 10) || 0 },
                (_, index) => (
                  <View key={index} style={styles.nameInputContainer}>
                    <Text style={styles.textNames}>{`Candidate #${
                      index + 1
                    }`}</Text>
                    <View style={styles.inputContainerNames}>
                      <TextInput
                        style={styles.inputNames}
                        placeholderTextColor="#5C6B73"
                        placeholder="Enter candidate name"
                        value={candidates[index]}
                        onChangeText={(text) =>
                          handleCandidateChange(text, index)
                        }
                      />
                    </View>
                  </View>
                )
              )}
            </View>

            <View></View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailsFormModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    position: "relative",
    backgroundColor: "#253237", // kung ng modal yung box
    padding: wp("4%"),
    height: hp("80%"),
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textHeader: {
    color: "#E0FBFC",
    fontSize: 18,
    fontWeight: "600",
  },
  iconContainerX: {
    marginLeft: 98,
    bottom: 9,
  },
  line: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 5,
    marginHorizontal: 20,
    position: "absolute",
    left: -20,
    right: -20,
    top: 45,
  },
  lineSeparator: {
    height: 2,
    backgroundColor: "red",
    marginVertical: 5,
    marginHorizontal: 20,
    position: "absolute",
    left: 50,
    right: 50,
    top: 340, // Adjust the top position as needed
  },
  fillUpContainer: {
    right: -9,
  },
  titleContainer: {
    marginTop: 60,
    right: 347,
  },
  textTitle: {
    marginBottom: 10,
    color: "#E0FBFC",
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainerTitle: {
    backgroundColor: "#253237",
    position: "absolute",
    top: 30,
    width: 328,
  },
  inputTitle: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#C2DFE3",
    marginBottom: 10,
    paddingLeft: 5,
    color: "white", // userinputcolor
  },
  categoryContainer: {
    marginTop: 60,
    right: 347,
  },
  textCategory: {
    marginBottom: 10,
    color: "#E0FBFC",
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainerCategory: {
    backgroundColor: "#253237",
    position: "absolute",
    top: 30,
    width: 328,
  },
  inputCategory: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#C2DFE3",
    marginBottom: 10,
    paddingLeft: 5,
    color: "white", // userinputcolor
  },
  candidateContainer: {
    marginTop: 61,
    right: 347,
  },
  textCandidate: {
    marginBottom: 10,
    color: "#E0FBFC",
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainerCandidate: {
    backgroundColor: "#253237",
    position: "absolute",
    top: 30,
    width: 328,
  },
  inputCandidate: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#C2DFE3",
    marginBottom: 10,
    paddingLeft: 5,
    color: "white",
  },
  namesContainer: {
    marginTop: 360,
    right: 530,
  },
  textNames: {
    marginBottom: 10,
    color: "#E0FBFC",
    fontSize: 18,
    fontWeight: "600",
  },
  inputContainerNames: {
    backgroundColor: "#253237",
    position: "absolute",
    top: 30,
    width: 328,
  },
  inputNames: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#C2DFE3",
    marginBottom: 10,
    paddingLeft: 5,
    color: "white",
  },
  nameInputContainer: {
    marginBottom: 40,
  },
});
