import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SaverLifeApp = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.opacity}><Text style={{color: 'white', fontSize: 20}}>Logout</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    opacity: {
        backgroundColor: '#c01089',
        width: 120,
        height: 70,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})

export default SaverLifeApp;
