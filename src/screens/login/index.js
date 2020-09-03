import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import TextInput_ from '../../components/Input/TextInput'
import CommonAction from '../../redux/common/action'
import AuthActions from '../../redux/auth/action'
import constants from '../../config/constants'
import Button_ from '../../components/Button'
import api from '../../utils/apis'
import Styles from './style'
import { CommonActions } from '@react-navigation/native';

function Login(props) {

    useEffect(() => {
    }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRegx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [error, setError] = useState({})


    function handleChangeText(value, label) {
        label == 'email' && setEmail(value.trim())
        label == 'passsword' && setPassword(value.trim())
    }

    async function userLogin() {
        try {
            const isValidated = checkValidation();
            if (isValidated) {
                props.loading(true)
                let body = {
                    email: email.toLowerCase(),
                    password: password
                }
                const response = await api.login(body);
                props.saveUserData(response)
                props.apiresponse({ flag: true, isError: false, isSuccess: true, message: 'Login successfully' })
                props.navigation.replace('MainScreen')
                props.loading(false)

            }
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    function checkValidation() {
        const errors = {};

        if (!email.trim()) {
            errors.email = 'This field is required';
        } else {
            if (!emailRegx.test(email.trim())) {
                errors.email = 'Invalid email formate';
            }
        }

        if (!password.trim()) {
            errors.password = 'This field is required';
        } else {
            if (password.trim().length < 3) {
                errors.password = 'Characters must be more then 7 ';
            }
        }
        // dispatch({ type: 'ON_ERROR', payload: errors });
        setError(errors)

        return !Object.keys(errors).length;
    }

    return (
        <ImageBackground source={require('../../assets/images/bg-2.png')} style={Styles.container}>
            <View style={Styles.form}>
                <View style={Styles.logoMain}>
                    <Image style={Styles.logo} source={require('../../assets/images/logo.png')} />
                </View>
                <Text style={Styles.headingText}>Login to your Account</Text>
                <TextInput_
                    placeholder='Email'
                    onChangeText={(e) => handleChangeText(e, 'email')}
                    value={email}
                    InputStyle={Styles.textInput}
                    error={error && error.email}
                />
                <TextInput_
                    placeholder='Password'
                    onChangeText={(e) => handleChangeText(e, 'passsword')}
                    value={password}
                    secureTextEntry={true}
                    InputStyle={Styles.textInput}
                    error={error && error.password}
                />
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: .7, flexDirection: 'row', }}>
                        <Text style={Styles.footerText1}>Dont have a Account?  </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}><Text style={Styles.footerText2}>Signup here</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: .3 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}><Text style={[Styles.footerText2, { alignSelf: 'flex-end' }]}>Forget password</Text></TouchableOpacity>
                    </View>
                </View>

                <Button_ title='Login' onPress={userLogin} rippleColor={constants.RIPPLE_COLOR} textStyle={{ color: 'white' }} />
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    saveUserData: AuthActions.saveUserData,
    loading: CommonAction.loading,
    apiresponse: CommonAction.apiresponse,
    fetchCategory: CommonActions.fetchCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
