import React from 'react'
import { View, Text } from 'react-native'
import NewHeaderComponent from '../components/NewHeaderComponent'
import ElectionItemComponent from '../components/ElectionItemComponent'
import DetailsFormModalComponent from '../components/DetailsFormModalComponent'

const Test = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#253237', alignItems: 'center', justifyContent: 'center'}}>
        <DetailsFormModalComponent />
        {/* <ElectionItemComponent /> */}
        {/* <NewHeaderComponent /> */}
    </View>
  )
}

export default Test