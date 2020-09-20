import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SaverLifeApp = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Hello, World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SaverLifeApp;
