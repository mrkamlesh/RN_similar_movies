import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './loginInterface.styles'

const LoginInterface = ({ onPress }) => (
  <>
    <Text style={styles.mainTitle}>SIMILAR MOVIES APP</Text>
    <TouchableOpacity style={styles.facebookButton} onPress={onPress}>
      <Ionicons name="logo-facebook" size={50} color="white" />
      <Text style={styles.facebookButtonText}>Login with Facebook</Text>
    </TouchableOpacity>
  </>
)

export default LoginInterface
