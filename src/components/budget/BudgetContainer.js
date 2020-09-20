import React from 'react';
import { SafeAreaView } from 'react-native'

import BudgetVisual from './BudgetVisual.js';

const BudgetContainer = props => {
  return (
    <SafeAreaView>
        <BudgetVisual
          categoryGoals={props.categoryGoals}
          categoryCurrent={props.categoryCurrent}
        />
    </SafeAreaView>
  );
};

export default BudgetContainer;