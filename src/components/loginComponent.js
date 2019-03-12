import React, { Component } from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';
import { saveAccessToken } from "../actions/";
import { connect } from "react-redux";
import { withNavigation } from 'react-navigation';


class Login extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'Onboarding' : 'Auth');
  };

  _storeData = async (token) => {
    try {
      await AsyncStorage.setItem('userToken', token);
    } catch (error) {
      console.log(error);
    }
  };

  login = () => {
    LoginManager.logInWithReadPermissions(["public_profile", "user_likes"]).then(
      result => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );

          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let token = data.accessToken.toString()
              this._storeData(token);
              this.props.saveAccessToken(token);
              this.props.navigation.navigate('Onboarding')
            }
          )
        }
      },
      error => {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {
    return (
      <View>
        <Text>LOGIN</Text>
        <Button title='LOG IN' onPress={this.login} />
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.token
  }
};
const mapDispatchToProps = { saveAccessToken };

const LoginWrapper = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withNavigation(LoginWrapper)
