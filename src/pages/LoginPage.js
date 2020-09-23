import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Auth from '../../Auth'
import { signIn } from '@okta/okta-react-native'
import { propTypes } from 'react-bootstrap/esm/Image'

const LoginPage = props => {
    useEffect(async () => {
        await createConfig({
            clientId: configFile.oidc.clientId,
            redirectUri: configFile.oidc.redirectUri,
            endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
            discoveryUri: configFile.oidc.discoveryUri,
            scopes: configFile.oidc.scopes,
            requireHardwareBackedKeyStore: configFile.oidc.requireHardwareBackedKeyStore,
        });
    })

    const login = async () => {
        await signIn()
        props.setLoginAttempt(props.loginAttempt + 1)
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Login</Text>
            <Button style={styles.button} title='Login' onPress={async () => { login() }} accessibilityLabel= 'Login Button'/>
            <Auth />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 300,
        height: 40,
        marginTop: 10,
        color: 'white',
        backgroundColor:'#c01089'

    }
})

export default LoginPage