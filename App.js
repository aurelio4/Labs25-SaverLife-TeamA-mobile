import React from 'react';
import Styles from './styles/Styles';
import {SafeAreaView, View, Text, StatusBar, Platform} from 'react-native';

const App = () => {
  const getVersion = () => {
    /* if iphone is higher model than iphone 10
        statusbar outside safeareaview
      
      same for android(?)
    */
    if (Platform.OS === 'ios') {
      const majorVersionIOS = parseInt(Platform.Version, 10);
      console.log(Platform.Version);
      if (majorVersionIOS <= 9) {
        console.log(Platform.Version);
      }
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
