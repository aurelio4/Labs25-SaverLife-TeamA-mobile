import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Auth from '../../Auth'
import SuperAuth from '../../SuperAuth'


const ProfilePage = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Login</Text>
            {/* <Auth /> */}
            <Auth />
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

export default ProfilePage