import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

const Test = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
        <HeaderComponent></HeaderComponent>
    </View>
  )
}

export default Test