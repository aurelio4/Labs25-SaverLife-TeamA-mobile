import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Plotly from 'react-native-plotly';

import { getNetIncomeAction } from '../actionCreators/mainActions'

const NetIncomePage = () => {
    const dispatch = useDispatch();
    const netIncomeData = useSelector(state => state.data.netIncome);
    const netIncomeLayout = useSelector(state => state.layout.netIncome);

    useEffect(() => {
        dispatch(getNetIncomeAction());
    }, []);

    return (
            <View style={{flex:1}}>
                
            <Plotly data={netIncomeData} config={{ displayModeBar: false }}
            layout={netIncomeLayout}/>
            
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

export default NetIncomePage