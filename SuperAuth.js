import React, { Component, Fragment, useState, useEffect } from 'react';

import { SafeAreaView, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { createConfig, signIn, signOut, isAuthenticated, getUser, getUserFromIdToken, EventEmitter } from '@okta/okta-react-native';
import configFile from './auth.config';

const SuperAuth = () => {
const [authenticated, setAuthenticated] = useState(false)
// const [counter, setCounter] = useState(0)
//   constructor() {
//     super();
//     this.state = {
//       authenticated: false,
//       context: null,
//     };
//     this.checkAuthentication = this.checkAuthentication.bind(this);
//   }


  useEffect(async () => {
    let that = this;
    EventEmitter.addListener('signInSuccess', function (e) {
      setAuthenticated(true);
    //   that.setContext('Logged in!');
    //   this.props.toggleLogin()
    });
    EventEmitter.addListener('signOutSuccess', function (e) {
      setAuthenticated(false);
    //   that.setContext('Logged out!');
    //   this.props.toggleLogin()
    });
    EventEmitter.addListener('onError', function (e) {
      console.warn(e);
    //   that.setContext(e.error_message);
    });
    EventEmitter.addListener('onCancelled', function (e) {
      console.warn(e);
    });
    await createConfig({
      clientId: configFile.oidc.clientId,
      redirectUri: configFile.oidc.redirectUri,
      endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
      discoveryUri: configFile.oidc.discoveryUri,
      scopes: configFile.oidc.scopes,
      requireHardwareBackedKeyStore: configFile.oidc.requireHardwareBackedKeyStore,
    });
    checkAuthentication()
    return () => {
        EventEmitter.removeAllListeners('signInSuccess');
        EventEmitter.removeAllListeners('signOutSuccess');
        EventEmitter.removeAllListeners('onError');
        EventEmitter.removeAllListeners('onCancelled');
    }
  }, [])

  useEffect(async () => {
    checkAuthentication()
}, [authenticated])
    

//   componentWillUnmount() {
//     EventEmitter.removeAllListeners('signInSuccess');
//     EventEmitter.removeAllListeners('signOutSuccess');
//     EventEmitter.removeAllListeners('onError');
//     EventEmitter.removeAllListeners('onCancelled');
//   }

  const checkAuthentication = async () => {
    const result = await isAuthenticated();
    if (result.authenticated !== authenticated) {
      setAuthenticated(result.authenticated);
    }
  }

  const login = async () => {
    signIn();
    
  }

  const logout = async () => {
    signOut();
    
  }
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              {authenticated ? (
                <Button
                  style={styles.button}
                  testID="logoutButton"
                  onPress={async () => logout() }
                  title="Logout"
                />
              ) : (
                <Button
                  style={styles.button}
                  testID="loginButton"
                  onPress={async () => login() }
                  title="Login"
                />
              )}
            </View>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.context}>
            {/* <Text>{this.state.context}</Text> */}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: 300,
    height: 40,
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default SuperAuth