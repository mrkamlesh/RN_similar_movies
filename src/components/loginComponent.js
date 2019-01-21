import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export default class Login extends Component {

  _responseInfoCallback(error, result) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ', {result});
    }
  }

  startRequest(token) {
    console.log('starteddddd')
    const infoRequest = new GraphRequest(
      '/me',
      {
        parameters: {
          fields: {
            string: 'email, name, first_name, middle_name, last_name, picture.type(large)'
          },
          access_token: {
            string: token
          }
        }
      },
      this._responseInfoCallback,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }
  
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    let token = data.accessToken.toString();
                    console.log(token)
                    this.startRequest(token);
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  }
}
