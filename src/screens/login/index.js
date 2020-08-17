import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import TextInput_ from '../../components/Input/TextInput'
import AuthActions from '../../redux/auth/action'
import constants from '../../config/constants'
import Button_ from '../../components/Button'
import api from '../../utils/apis'
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
            let body = {
                email: email,
                password: password
            }
            const response = await api.login(body);
            response !== undefined && props.saveUserData(response)
            props.navigation.replace('MainScreen')

        } catch (error) {
            console.log(error)
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
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: .7, flexDirection: 'row', }}>
                        <Text style={Styles.footerText1}>Dont have a Account?  </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}><Text style={Styles.footerText2}>Signup here</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: .3 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}><Text style={[Styles.footerText2, { alignSelf: 'flex-end' }]}>Forget password</Text></TouchableOpacity>
                    </View>
                </View>

                <Button_ title='Login' onPress={userLogin} rippleColor={constants.RIPPLE_COLOR} />
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    saveUserData: AuthActions.saveUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
