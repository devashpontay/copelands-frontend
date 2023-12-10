import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const NewHeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>Add an item for voting</Text>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <Icon name="plus" size={20} color="#253237" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default NewHeaderComponent

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#5C6B73',
        padding: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
    },
    textStyle: {
        fontSize: 14,
        color: '#fff',
    },
    iconContainer: {
        backgroundColor: '#C2DFE3',
        padding: 5,
        borderRadius: 5,
    },
})