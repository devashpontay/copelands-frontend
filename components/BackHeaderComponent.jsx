import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const BackHeaderComponent = () => {
    return (
      <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Back</Text>
          <View style={styles.iconContainer}>
              <TouchableOpacity>
                  <Icon name="arrow-left" size={20} color="#5C6B73" />
              </TouchableOpacity>
          </View>
      </View>
    )
  }

export default BackHeaderComponent


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#5C6B73',
        padding: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    textStyle: {
        fontSize: 17,
        color: '#fff',
        left: 38,
        fontWeight: '600',
    },
    iconContainer: {
        backgroundColor: '#9DB4C0',
        padding: 5,
        height: 33,
        right: 35,
        borderRadius: 15,
    },
})