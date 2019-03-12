import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';
import { saveAccessToken } from "../actions/";
import { connect } from "react-redux";
import { withNavigation } from 'react-navigation';


class Login extends Component {

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
              this.props.saveAccessToken(token);
              this.props.navigation.navigate('App')
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
