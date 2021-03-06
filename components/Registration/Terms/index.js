import React, {useState, useEffect, useContext} from 'react'

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {useHistory} from 'react-router-native'

import AppHeaderLarge from '../../AppHeaderLarge/index.js'
import LoadingOverlay from '../../LoadingOverlay/index.js'

import {ErrorsContext} from '../../Errors/index.js'

import AppStyles from '@assets/styles'
import Images from '@assets/images'
import Styles from './styles'

function Terms(props) {
  let history = useHistory()

  const [loadingOverlayVisible, setLoadingOverlayVisible] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const errors = useContext(ErrorsContext)

  return (
    <View style={AppStyles.viewFull}>
      <AppHeaderLarge disabled={true} />
      <View style={[AppStyles.tab, {top: 46}]}>
        <Text
          style={[
            AppStyles.h2,
            AppStyles.textPrimary,
            AppStyles.textUpper,
            Styles.title,
          ]}>
          {props.title}
        </Text>
        <ScrollView style={Styles.message}>
          <View style={Styles.messageFill}>
            <Text>{props.message}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{width: '80%'}}
          hitSlop={{top: 20, bottom: 0, left: 10, right: 10}}
          onPress={() => {
            setIsChecked((previousState) => !previousState)
          }}>
          <View style={Styles.checkContainer}>
            <View style={Styles.checkbox}>
              {isChecked ? (
                <Text style={[AppStyles.textSecondary, Styles.checkmark]}>
                  &#10003;
                </Text>
              ) : null}
            </View>
            <Text style={Styles.checktext}>
              I have read and agree to{'\n'}
              {props.title}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[AppStyles.button, AppStyles.flexView, Styles.nextButton]}
          disabled={isChecked ? false : true}
          onPress={() => {
            setLoadingOverlayVisible(true)
            setTimeout(() => {
              console.log('Terms Change')
              setLoadingOverlayVisible(false)
              setIsChecked((previousState) => !previousState)
              props.setSetupScreens(props.setupScreens + 1)
            }, 2000)
          }}>
          <Text
            style={[
              AppStyles.h2,
              AppStyles.textUpper,
              isChecked ? AppStyles.textPrimary : {color: '#bbb'},
            ]}>
            Next
          </Text>
          <View style={{width: 46}}>
            {isChecked ? (
              <Image source={Images.arrow} style={{marginLeft: 20}} />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
      {loadingOverlayVisible ? <LoadingOverlay /> : null}
    </View>
  )
}

export default Terms
