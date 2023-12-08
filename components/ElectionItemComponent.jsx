import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ElectionItemComponent = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.placeContainer}>
          <Text style={styles.textPlace}>PLACE</Text>
          <View style={styles.iconContainer}>
            <Icon name="circle" size={15} color="green" />
          </View>
          <Text style={styles.openText}> OPEN</Text>
        </View>
      </View>

      <View>
        <Text style={styles.textStyle}>Which place should we go?</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.timeStyle}>Started - 8:30 PM June 12, 2023</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#E0FBFC',
    padding: 20,
    width: '89%',
    height: 130,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#5C6B73',
    position: 'relative',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 19,
  },
  textStyle: {
    fontSize: 22,
    marginBottom: 10,
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textPlace: {
    fontSize: 17,
    color: '#CCCCCC',
  },
  openText: {
    fontSize: 15,
    color: '#CCCCCC',
    marginLeft: 2,
  },
  iconContainer: {
    marginLeft: 225,
  },
  timeContainer: {
    top: 8,
  },
  timeStyle: {
    fontSize: 14,
    color: '#CCCCCC',
  }
});

export default ElectionItemComponent;
