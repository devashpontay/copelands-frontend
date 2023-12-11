import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TheWinnerComponent = ({ winnerName }) => {
  return (
    <View style={styles.container}>
      {/* winner display */}
      <View style={styles.displayContainer}>
        <Text style={styles.textWinner}>The winner is: {winnerName}</Text>
      </View>
    </View>
  );
};

const App = () => {
  // Assuming you have a state or variable that holds the winner's name
  const winnerName = 'Buddy skyyflakes';

  return (
    <View>
      {/* Other components or views if needed */}
      <TheWinnerComponent winnerName={winnerName} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: wp('85%'), 
    height: hp('8%'),
    justifyContent: 'center',
  },
  textWinner: {
    fontSize: hp('2.2%'), 
    color: 'white',
    fontWeight: '600',
    marginLeft: wp('3%'), 
  },
});
