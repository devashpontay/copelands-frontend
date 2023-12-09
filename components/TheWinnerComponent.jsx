import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    width: 370,
    height: 70,
    justifyContent: 'center',
  },
  textWinner: {
    fontSize: 19,
    color: 'white',
    fontWeight: '600',
    marginLeft: 15,
  },
});
