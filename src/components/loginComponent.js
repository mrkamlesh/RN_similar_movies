import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';

export default class Login extends Component {

  // _responseInfoCallback(error, result) {
  //   if (error) {
  //     console.log('Error fetching data: ' + error.toString());
  //   } else {
  //     console.log('Success fetching data: ', {result});
  //   }
  // }

  // startRequest(token) {
  //   console.log('starteddddd')
  //   const infoRequest = new GraphRequest(
  //     '/me',
  //     {
  //       parameters: {
  //         fields: {
  //           string: 'id, email, name, first_name, middle_name, last_name, picture.type(large)'
  //         },
  //         access_token: {
  //           string: token
  //         }
  //       }
  //     },
  //     this._responseInfoCallback,
  //   );

  //   const movieRequest = new GraphRequest(
  //     '/10216755940084848/music',
  //     {
  //       accessToken: token
  //     },
  //     this._responseInfoCallback,
  //   );

  //   new GraphRequestManager().addRequest(movieRequest).start();
  // }

  login(){
    LoginManager.logInWithReadPermissions(["public_profile", "user_likes"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let token = data.accessToken.toString();
              const _responseInfoCallback = (error, result) => {
                if (error) {
                  console.log('Error fetching data: ' + error.toString());
                } else {
                  console.log('Success fetching data: ', {result});
                }
              }
              const movieRequest = new GraphRequest(
                '/10216755940084848/movies',
                {
                  accessToken: token
                },
                _responseInfoCallback,
              );
              new GraphRequestManager().addRequest(movieRequest).start();
            }
          )
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  
  render() {
    return (
      <View>
        {/* <LoginButton
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
          onLogoutFinished={() => console.log("logout.")}/> */}
          <Button title="LOGIN" onPress={this.login}/>
      </View>
    );
  }
}
