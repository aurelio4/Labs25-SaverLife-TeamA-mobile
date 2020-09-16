import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import BudgetContainer from '../components/budget/BudgetContainer'
import { getBudgetAction } from '../actionCreators/mainActions';

const BudgetPage = () => {
    const dispatch = useDispatch();
    const futureBudget = useSelector(state => state.futureBudget);
    const currentMonthlySpending = useSelector(
        state => state.currentMonthlySpending
    );

    useEffect(() => {
        dispatch(getBudgetAction());
      }, []);
    return (
        <View style={styles.container}>
            <BudgetContainer categoryGoals={futureBudget}
              categoryCurrent={currentMonthlySpending}/>
            {/* <Text style={{fontSize: 30}}>Hello, World</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default BudgetPage