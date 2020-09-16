import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Plotly from 'react-native-plotly';

import { getSpendingBarAction, getSpendingDonutAction } from '../actionCreators/mainActions'

const PastSpendingPage = () => {
    const dispatch = useDispatch();
    const spendingBarData = useSelector(state => state.data.spendingBar);
    const spendingBarLayout = useSelector(state => state.layout.spendingBar);
    const spendingDonutData = useSelector(state => state.data.spendingDonut);
    const spendingDonutLayout = useSelector(state => state.layout.spendingDonut);

    useEffect(() => {
        dispatch(getSpendingBarAction());
        dispatch(getSpendingDonutAction());
    }, []);

    return (
        <View style={{ flex: 1 }}>
                
            <Plotly data={spendingBarData} config={{ displayModeBar: false }}
            layout={spendingBarLayout}/>
                
            
            <Plotly data={spendingDonutData} config={{ displayModeBar: false }}
            layout={spendingDonutLayout}/>
            
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

export default PastSpendingPage