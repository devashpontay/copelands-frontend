import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createElection } from "../services/CopelandMethodService";

const NewDetailsform = ({ closeModal, _x }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [candidateCount, setcandidateCount] = useState("");
  const [candidates, setCandidates] = useState(
    Array.from({ length: 0 }, () => "")
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const resetInputs = () => {
    setTitle("");
    setCategory("");
    setcandidateCount("");
    setCandidates(Array.from({ length: 0 }, () => ""));
  };

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleCategoryChange = (text) => {
    setCategory(text);
  };

  const handlecandidateCountChange = (text) => {
    setcandidateCount(text);
    setCandidates(Array.from({ length: parseInt(text, 10) || 0 }, () => ""));
  };

  const handleCandidatesChange = (text, index) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index] = text;
    setCandidates(updatedCandidates);
  };

  const handleSubmission = () => {
    // Implement your form submission logic here
    // You can send the form data to an API or perform any other necessary actions
    // For now, let's just log the form data to the console

    // console.log({
    //   moderator,
    //   title,
    //   category,
    //   status,
    //   candidateCount,
    //   candidates,
    // });

    const election = {
      moderator,
      title,
      category,
      status,
      candidateCount,
      candidates,
    };

    createElection(election)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Reset the form after submission
    resetInputs();
    closeModal();

    //Re render MainPage component
    _x();
  };

  useEffect(() => {
    const isValid =
      title.trim() !== "" &&
      category.trim() !== "" &&
      candidateCount.trim() !== "" &&
      candidates.every((candidate) => candidate.trim() !== "");

    setIsFormValid(isValid);
  }, [title, category, candidateCount, candidates]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.headerMainContainer}>
              <View style={styles.headerInnerContainer}>
                <Text style={styles.textHeader}>
                  Fill out voting details form
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={closeModal}>
                  <Icon name="times-circle" size={30} color="#5C6B73" />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.fillUpContainer}>
                <View style={styles.titleHolder}>
                  <View style={styles.textStyleTitle}>
                    <Text style={styles.textTitle}>Title</Text>
                  </View>
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

                <View style={styles.categoryHolder}>
                  <View style={styles.textStyleCategory}>
                    <Text style={styles.textCategory}>Category</Text>
                  </View>
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

                <View style={styles.candidateHolder}>
                  <View style={styles.textStyleCandidate}>
                    <Text style={styles.textCandidate}>
                      Number of Candidates
                    </Text>
                  </View>
                  <View style={styles.inputContainerCandidate}>
                    <TextInput
                      style={styles.inputCandidate}
                      placeholderTextColor="#5C6B73"
                      placeholder="Example: 2"
                      keyboardType="numeric"
                      value={candidateCount}
                      onChangeText={handlecandidateCountChange}
                    />
                  </View>
                </View>

                <View style={styles.lineDivider}></View>
              </View>

              <View style={styles.namesContainer}>
                {Array.from(
                  { length: parseInt(candidateCount, 10) || 0 },
                  (_, index) => (
                    <View key={index} style={styles.nameInputContainer}>
                      <Text style={styles.textNames}>{`Candidate #${
                        index + 1
                      }`}</Text>
                      <View style={styles.inputContainerNames}>
                        <TextInput
                          style={styles.inputNames}
                          placeholderTextColor="#5C6B73"
                          placeholder={`Enter candidate #${index + 1} name`}
                          value={candidates[index]}
                          onChangeText={(text) =>
                            handleCandidatesChange(text, index)
                          }
                        />
                      </View>
                    </View>
                  )
                )}
              </View>
            </ScrollView>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  isFormValid
                    ? styles.activeSubmitButton
                    : styles.disabledSubmitButton,
                ]}
                onPress={handleSubmission}
                disabled={!isFormValid}
              >
                <Text
                  style={[
                    styles.submitButtonText,
                    { color: isFormValid ? "white" : "#5c6b73" },
                  ]}
                >
                  SUBMIT VOTE
                </Text>
                {/* this button will call the ElectionItemComponent page */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewDetailsform;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#253237",
    height: hp("75%"),
    width: wp("90%"),
  },
  headerMainContainer: {
    backgroundColor: "#253237",
    width: wp("90%"),
    height: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
  },
  headerInnerContainer: {
    marginLeft: wp("5%"),
  },
  textHeader: {
    fontSize: hp("2.5%"),
    color: "#fff",
  },
  iconContainer: {
    marginRight: wp("4%"),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fillUpContainer: {
    height: hp("35%"),
    width: wp("90%"),
    bottom: hp("15%"),
  },
  titleHolder: {
    marginTop: wp("6%"),
    marginLeft: wp("5%"),
    marginRight: wp("6%"),
  },
  textStyleTitle: {},
  textTitle: {
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "600",
  },
  inputContainerTitle: {
    backgroundColor: "#253237",
    marginTop: wp("2%"),
    borderBottomWidth: hp("0.2%"),
    borderBottomColor: "white",
    paddingLeft: wp("1.5%"),
  },
  inputTitle: {
    fontSize: hp("2%"),
    color: "white",
  },
  categoryHolder: {
    marginTop: wp("6%"),
    marginLeft: wp("5%"),
    marginRight: wp("6%"),
  },
  textCategory: {
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "600",
  },
  inputContainerCategory: {
    backgroundColor: "#253237",
    marginTop: wp("2%"),
    borderBottomWidth: hp("0.2%"),
    borderBottomColor: "white",
    paddingLeft: wp("1.5%"),
  },
  inputCategory: {
    fontSize: hp("2%"),
    color: "white",
  },
  candidateHolder: {
    marginTop: wp("6%"),
    marginLeft: wp("5%"),
    marginRight: wp("6%"),
  },
  textCandidate: {
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "600",
  },
  inputContainerCandidate: {
    backgroundColor: "#253237",
    marginTop: wp("2%"),
    borderBottomWidth: hp("0.2%"),
    borderBottomColor: "white",
    paddingLeft: wp("1.5%"),
  },
  inputCandidate: {
    fontSize: hp("2%"),
    color: "white",
  },
  lineDivider: {
    backgroundColor: "black",
    marginTop: wp("8%"),
    marginLeft: wp("10%"),
    marginRight: wp("6%"),
    width: wp("70%"),
    height: hp("0.3%"),
    justifyContent: "center",
  },
  namesContainer: {
    bottom: hp("18%"),
    width: wp("90%"),
  },
  textNames: {
    marginLeft: wp("5%"),
    color: "white",
    fontSize: hp("2%"),
    fontWeight: "600",
  },
  inputContainerNames: {
    backgroundColor: "#253237",
    marginTop: wp("2%"),
    borderBottomWidth: hp("0.2%"),
    borderBottomColor: "white",
    marginRight: wp("6%"),
    marginLeft: wp("5%"),
  },
  inputNames: {
    fontSize: 18,
    borderBottomColor: "#C2DFE3",
    marginBottom: hp("0.5%"),
    paddingLeft: wp("1.5%"),
    color: "white",
  },
  nameInputContainer: {
    marginBottom: hp("2%"),
    fontSize: hp("2%"),
    color: "white",
  },
  btnContainer: {
    // ... (your existing styles remain unchanged)
  },
  submitButton: {
    width: wp("80%"),
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    bottom: wp("5%"),
    alignSelf: "center",
  },
  activeSubmitButton: {
    backgroundColor: "#5c6b73",
    //  color: 'green',
  },
  disabledSubmitButton: {
    backgroundColor: "#5c6b73",
    //  color: 'green',
  },
  submitButtonText: {
    // color: 'red',
    fontSize: hp("2%"),
    textAlign: "center",
  },
});
