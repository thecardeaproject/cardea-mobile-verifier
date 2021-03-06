import React, {useState, useContext} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import AppStyles from '@assets/styles'
import Styles from './styles'

import {useHistory} from 'react-router-native'

const ErrorsContext = React.createContext({})

function ErrorDialog(props) {
  let history = useHistory()

  const errors = useContext(ErrorsContext)

  return (
    <>
      <View style={Styles.errorView}>
        <View style={Styles.errorMessage}>
          <Text style={[AppStyles.h2, AppStyles.textError, AppStyles.textBold]}>
            ERROR{'\n'}
          </Text>
          <Text style={[AppStyles.h3, AppStyles.textPrimary]}>
            {props.text}
          </Text>
          <TouchableOpacity
            style={[
              AppStyles.button,
              AppStyles.errorBackground,
              {marginTop: 30},
            ]}
            onPress={() => {
              errors.setVisible(false)
              history.push(props.path)
            }}>
            <Text style={[AppStyles.h2, AppStyles.textSecondary]}>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

function Errors(props) {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const [path, setPath] = useState('')

  return (
    <ErrorsContext.Provider
      value={{setVisible: setVisible, setText: setText, setPath: setPath}}>
      <View>
        {props.children}
        {visible ? (
          <>
            <ErrorDialog text={text} path={path} />
          </>
        ) : null}
      </View>
    </ErrorsContext.Provider>
  )
}

export default Errors
export {ErrorsContext}
