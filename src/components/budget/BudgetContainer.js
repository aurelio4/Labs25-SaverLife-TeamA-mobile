import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import BudgetVisual from './BudgetVisual.js';

const BudgetContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
        <BudgetVisual
          categoryGoals={props.categoryGoals}
          categoryCurrent={props.categoryCurrent}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 450,
  }
})

export default BudgetContainer;