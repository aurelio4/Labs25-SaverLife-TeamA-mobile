/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import EnhancedProgressBar from './EnhancedProgressBar';

const BudgetVisual = props => {
  const categoriesAmountsCurrent = props.categoryCurrent;
  const categoriesAmountsGoals = props.categoryGoals;
  const [userIncome, setUserIncome] = useState(2500);
  const [spendingGoals, setSpendingGoals] = useState(props.categoryGoals);
  const [spendingCurrent, setSpendingCurrent] = useState(props.categoryCurrent);
  const [savingsGoalDollars, setSavingsGoalDollars] = useState(100);
//   const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(spendingGoals);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>
        My Budget
      </Text>
      {Object.entries(props.categoryGoals).map(entry => {
        return (
          <EnhancedProgressBar
            entry={entry}
            spendingCurrent={props.categoryCurrent}
            savingsGoalDollars={savingsGoalDollars}
            spendingGoals={props.categoryGoals}
            setSpendingGoals={setSpendingGoals}
            // isEditing={isEditing}
            setFormValues={setFormValues}
            key={entry}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 450,
  },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 450,
    }
})

export default BudgetVisual;