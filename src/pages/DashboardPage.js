import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { getDashboard } from '../actionCreators/mainActions';
import TransactionsTable from '../components/common/TransactionsTable'

const BudgetPage = () => {
    const dispatch = useDispatch();
    let spendEarnRatio = useSelector(state => state.dashboard.spendEarnRatio);
    let accountType = useSelector(state => state.dashboard.account_type);
    let currentBalance = useSelector(state => state.dashboard.current_balance);
    const transactions = useSelector(state => state.dashboard.transactions);
    useEffect(() => {
        dispatch(getDashboard());
    }, []);
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, marginTop: 15}}>My Dashboard</Text>
    <Text style={{marginTop: 20, fontSize: 17}}>{`Spend Earn Ratio: ${spendEarnRatio ? spendEarnRatio : ''}1.05 `}</Text>
    <Text style={{marginTop: 15, fontSize: 17}}>{`Account Type: ${accountType}`}</Text>
    <Text style={{marginTop: 15, fontSize: 17}}>{`Current Balance: $${currentBalance}`}</Text>
            <TransactionsTable transactions={transactions} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default BudgetPage