import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewHeaderComponent from '../components/NewHeaderComponent'
import DetailsFormModalComponent from '../components/DetailsFormModalComponent'
import NewDetailsform from '../components/NewDetailsform'
import ElectionItemComponent from '../components/ElectionItemComponent'
import TheDeleteBtnComponent from '../components/TheDeleteBtnComponent'

const MainPage = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#253237', alignItems: 'center', justifyContent: 'center'}}>
      {/* header */}
      <View>
        {/* <NewHeaderComponent /> */}
      </View>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})  