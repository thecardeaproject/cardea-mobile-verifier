/**
 * @format
 */

//For UUIDv4 within React Native
import 'react-native-get-random-values'

import {AppRegistry} from 'react-native'
import React from 'react'
import {BackButton, NativeRouter} from 'react-router-native'
import App from './App'
import {name as appName} from './app.json'

const Base = (props) => (
  <NativeRouter>
    <BackButton>
      <App />
    </BackButton>
  </NativeRouter>
)

AppRegistry.registerComponent(appName, () => Base)
