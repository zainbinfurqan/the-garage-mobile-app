import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Image } from 'react-native'
import TextInput_ from '../../components/Input/TextInput'
import constants from '../../config/constants'
import Button_ from '../../components/Button'
import Styles from './style'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleChangeText(value, label) {
        label == 'email' && setEmail(value)
        label == 'passsword' && setPassword(value)
    }

    async function userLogin() {
        try {

        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.form}>
                <View style={Styles.logoMain}>
                    <Image style={Styles.logo} source={require('../../assets/images/logo.png')} />
                </View>
                <Text style={Styles.headingText}>Login to your Account</Text>
                <TextInput_
                    placeholder='Email'
                    onChangeText={(e) => handleChangeText(e, 'email')}
                    value={email}
                    InputStyle={Styles.textInput} />
                <TextInput_
                    placeholder='Password'
                    onChangeText={(e) => handleChangeText(e, 'passsword')}
                    value={password}
                    secureTextEntry={true}
                    InputStyle={Styles.textInput} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.footerText1}>Dont have a Account?  </Text><Text style={Styles.footerText2}>Sinup here</Text>
                </View>
                <Button_ title='Login' rippleColor={constants.RIPPLE_COLOR} />
            </View>
        </SafeAreaView>
    )
}

export default Login