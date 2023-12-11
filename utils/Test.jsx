import React from 'react'
import { View, Text } from 'react-native'
import NewHeaderComponent from '../components/NewHeaderComponent'
import ElectionItemComponent from '../components/ElectionItemComponent'
import DetailsFormModalComponent from '../components/DetailsFormModalComponent'
import BackHeaderComponent from '../components/BackHeaderComponent'
import ThankyouForVotingComponent from '../components/ThankyouForVotingComponent'
import ListOfCandidatesComponent from '../components/ListOfCandidatesComponent'
import TheWinnerComponent from '../components/TheWinnerComponent'
import TheDeleteBtnComponent from '../components/TheDeleteBtnComponent'
import SubmitAndGetWinnerComponent from '../components/SubmitAndGetWinnerComponent'
import WinnerButtonComponent from '../components/WinnerButtonComponent'
import LoginPage from '../screens/LoginPage'

const Test = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#253237', alignItems: 'center', justifyContent: 'center'}}>
        {/* <DetailsFormModalComponent /> */}
        {/* <ElectionItemComponent /> */}
        {/* <NewHeaderComponent /> */}
        {/* <BackHeaderComponent /> */}
        {/* <ThankyouForVotingComponent /> */}
        {/* <ListOfCandidatesComponent /> */}
        {/* <TheDeleteBtnComponent /> */}
        {/* <SubmitAndGetWinnerComponent /> */}
        <WinnerButtonComponent />
        {/* <TheWinnerComponent /> */}
        {/* <LoginPage /> */}
    </View>
  )
}

export default Test