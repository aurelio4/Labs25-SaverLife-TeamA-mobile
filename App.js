/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createConfig, signIn, signOut, isAuthenticated, getUser, getUserFromIdToken, EventEmitter } from '@okta/okta-react-native';


import Navbar from './src/components/common/Navbar'
import SaverLifeApp from './src/SaverLifeApp'
import mainReducer from './src/reducers/mainReducer'
import LoadingComponent from './src/components/common/LoadingComponent'
import BudgetPage from './src/pages/BudgetPage'
import LoginPage from './src/pages/LoginPage'
import ProfilePage from './src/pages/ProfilePage'

import Auth from './Auth';

const store = createStore(mainReducer, applyMiddleware(thunk));

// const [loginAttempt, setLoginAttempt] = useState(0)

// useEffect(async () => {
//   const loggedIn = await isAuthenticated()
//   setLoginStatus(loggedIn.authenticated)
// }, [loginAttempt])

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

const App = () => {
  // const checkAuthentication = async () => {
  //   const status = await isAuthenticated()
  //   return status.authenticated
  // }
  // const [loginStatus, setLoginStatus] = useState(false)
  
  // useEffect(() => {
  //    if (checkAuthentication() !== loginStatus) {
  //       setLoginStatus(!loginStatus)
  //     }
  // }, [])
  // const toggleLogin = () => {
  //   setLoginStatus(!loginStatus)
  // }
  return (
    // <View style={styles.container}>
    //   <Auth />
    // </View>
    <Provider store={store}>
      <NavigationContainer >
      
      
      <Navbar />
        
  </NavigationContainer>
    </Provider>
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
        
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //         <Text style={styles.sectionTitle}>Hello, World</Text>
    //           <Text style={styles.sectionTitle}>Step One</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits.
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>See Your Changes</Text>
    //           <Text style={styles.sectionDescription}>
    //             <ReloadInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Debug</Text>
    //           <Text style={styles.sectionDescription}>
    //             <DebugInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Learn More</Text>
    //           <Text style={styles.sectionDescription}>
    //             Read the docs to discover what to do next:
    //           </Text>
    //         </View>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
});

export default App;
