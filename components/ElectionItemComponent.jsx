import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import VotingSessionPage from '../screens/VotingSessionPage';


const ElectionItemComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showVotingSession, setShowVotingSession] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  const formattedDate = `${currentTime.toLocaleDateString()}`;

  const handleContainerClick = () => {
    setShowVotingSession(true);
  };

  return (
    <View style={styles.container}>
      {showVotingSession ? (
        <VotingSessionPage />
      ) : (
        <TouchableOpacity onPress={handleContainerClick} style={styles.boxContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.placeContainer}>
              <Text style={styles.textPlace}>PLACE</Text>
              <View style={styles.iconContainer}>
                <Icon name="circle" size={hp('2%')} color="green" />
              </View>
              <Text style={styles.openText}> OPEN</Text>
            </View>
          </View>

          <View>
            <Text style={styles.textStyle}>Which place should we go?</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timeStyle}>Started - {formattedTime} {formattedDate}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ElectionItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: '#E0FBFC',
    padding: wp('4%'),
    width: wp('90%'),
    minHeight: hp('15%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: wp('2%'),
    borderColor: '#5C6B73',
    position: 'relative',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: hp('2%'),
  },
  textStyle: {
    fontSize: hp('2.5%'),
    marginBottom: hp('1%'),
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textPlace: {
    fontSize: hp('1.8%'),
    color: '#CCCCCC',
  },
  openText: {
    fontSize: hp('1.5%'),
    color: '#CCCCCC',
    marginLeft: wp('0.5%'),
  },
  iconContainer: {
    marginLeft: wp('55%'),
  },
  timeContainer: {
    top: hp('1.5%'),
  },
  timeStyle: {
    fontSize: hp('1.5%'),
    color: '#CCCCCC',
  },
});


