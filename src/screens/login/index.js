import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, Image, ImageBackground } from 'react-native'
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
        <ImageBackground source={require('../../assets/images/bg-1.png')} style={Styles.container}>
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
                    <Text style={Styles.footerText1}>Dont have a Account?  </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}><Text style={Styles.footerText2}>Sinup here</Text></TouchableOpacity>
                </View>
                <Button_ title='Login' rippleColor={constants.RIPPLE_COLOR} />
            </View>
        </ImageBackground>
    )
}

export default Login