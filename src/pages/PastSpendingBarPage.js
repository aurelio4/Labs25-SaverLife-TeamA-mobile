import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Plotly from 'react-native-plotly';

import { getSpendingBarAction, getSpendingDonutAction } from '../actionCreators/mainActions'

const PastSpendingBarPage = () => {
    const dispatch = useDispatch();
    const spendingBarData = useSelector(state => state.data.spendingBar);
    const spendingBarLayout = useSelector(state => state.layout.spendingBar);

    useEffect(() => {
        dispatch(getSpendingBarAction());
    }, []);

    return (
        <View style={styles.container}>  
            <Plotly data={spendingBarData} config={{ displayModeBar: false }}
            layout={spendingBarLayout}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default PastSpendingBarPage