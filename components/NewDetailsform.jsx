import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createElection } from "../services/CopelandMethodService";

const NewDetailsform = ({ navigation, route }) => {
  const moderator = route.params;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [candidateCount, setcandidateCount] = useState("");
  const [candidates, setCandidates] = useState(Array.from({ length: 0 }, () => ""));
  const [opacity] = useState(new Animated.Value(1));
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
    const election = {
      moderator: moderator.moderator,
      title,
      category,
      status: "OPEN",
      candidateCount,
      candidates,
    };

    createElection(election)
      .then((response) => { })
      .catch((err) => {
        console.log("CREATE NEW VOTING SESSION: ", err);
      });

    // Reset the form after submission
    resetInputs();
    moderator.forceUpdate();
    navigation.goBack();

    //Re render MainPage component
  };

  const handlePressIn = () => {
    if (!isFormValid) {
      Animated.timing(opacity, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };
  
  const handlePressOut = () => {
    if (!isFormValid) {
      Animated.timing(opacity, {
        toValue: 5,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };
  
  useEffect(() => {
    const isValid =
      title.trim() !== "" &&
      category.trim() !== "" &&
      candidateCount.trim() !== "" &&
      candidates.every((candidate) => candidate.trim() !== "");

    setIsFormValid(isValid);

    Animated.timing(opacity, {
      toValue: isValid ? 1 : 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [title, category, candidateCount, candidates]);

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* header */}
          <View style={{
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: wp("2%"),
              borderBottomWidth: 2,
            }}>
              <View style={{
                flex: 1,
              }}>
                <Text style={{
                  fontSize: hp("1.9%"),
                  color: "#fff",
                  fontFamily: "ibmPlexMono-semiBold",
                  paddingLeft: wp("2%"),
                }}>
                  Fill out voting details form
                </Text>
              </View>
              <View style={{
                paddingRight: wp("2%"),
              }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="times-circle" size={30} color="#5C6B73" />
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* fill-up form */}
            <View style={styles.fillUpContainer}>

              <View style={{
                flex: 1,
                padding: wp("5%"),
                // backgroundColor: 'tomato',
              }}>
                <View style={{
                  color: "white",
                  fontSize: hp("2.5%"),
                }}>
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

              <View style={{
                flex: 1,
                padding: wp("5%"),
                // backgroundColor: 'green',
              }}>
                <View style={{
                  color: "white",
                  fontSize: hp("2.5%"),
                }}>
                  <Text style={styles.textTitle}>Category</Text>
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

              <View style={{
                flex: 1,
                padding: wp("5%"),
                // backgroundColor: 'yellow',
              }}>
                <View style={{
                  color: "white",
                  fontSize: hp("2.5%"),
                }}>
                  <Text style={styles.textTitle}>Number of Candidates</Text>
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

              <View style={{
                // flex: 1,
                alignItems: 'center',
                backgroundColor: 'black',
                margin: wp("6%"),
                height: hp("0.2%"),
              }}>
              </View>

            </View>
            {/* end of fill-up form */}

            <View style={{
              flex: 1,
              padding: wp("2%"),
              marginBottom: hp("5%"),
            }}>
              {Array.from(
                { length: parseInt(candidateCount, 10) || 0 },
                (_, index) => (
                  <View key={index} style={styles.nameInputContainer}>
                    <Text style={styles.textNames}>{`Candidate #${index + 1
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

          <View style={{
            padding: wp('5%'),
            justifyContent: 'center',
          }}>
            <TouchableOpacity
              style={[
                styles.submitButton,
                isFormValid ? styles.activeSubmitButton : styles.disabledSubmitButton,
              ]}
              onPress={handleSubmission}
              disabled={!isFormValid}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Animated.View style={[styles.buttonContainer, { opacity }]}>
                <Text style={[
                  styles.submitButtonText,
                  { color: isFormValid ? 'white' : 'white' },
                ]}>
                  SUBMIT VOTE
                </Text>
              </Animated.View>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      {/* </Modal> */}
    </View>
  );
};

export default NewDetailsform;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  scrollContainer: {
    flexGrow: 1,
  },
  fillUpContainer: {
  },
  titleHolder: {
    marginTop: wp("6%"),
    marginLeft: wp("5%"),
    marginRight: wp("6%"),
  },
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
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
});
