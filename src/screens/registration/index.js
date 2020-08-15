import React, { useState, useEffect, useReducer } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, Image, KeyboardAvoidingView, Keyboard, ImageBackground, ScrollView } from 'react-native'
import constants from '../../config/constants'
import TextInput_ from '../../components/Input/TextInput'
import Button_ from '../../components/Button'
import Styles from './style'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNo: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_CHANGE_TEXT':
            return { ...state, ...action.payload };
        case 'ON_ERROR':
            return { ...state, errors: action.payload };
        default:
            return state;
    }
}

function Registration(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    function handleChangeText(value, label) {
        dispatch({
            type: 'ON_CHANGE_TEXT',
            payload: {
                [label]: value.trim(),
            },
        });
    }



    return (
        <ImageBackground source={require('../../assets/images/bg-1.png')} style={[Styles.container]}>
            <TouchableOpacity onPress={() => props.navigation.pop()}>
                <Image style={{ height: 30, width: 30, margin: 10 }} source={require('../../assets/icons/back-white.png')} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}>
                <View style={Styles.form}>
                    <View style={Styles.logoMain}>
                        <Image style={Styles.logo} source={require('../../assets/images/logo.png')} />
                    </View>
                    <Text style={Styles.headingText}>Registration</Text>
                    <TextInput_
                        placeholder='First Name'
                        onChangeText={(e) => handleChangeText(e, 'firstName')}
                        InputStyle={Styles.textInput}
                        value={state.firstName}
                    />
                    <TextInput_
                        placeholder='Last Name'
                        onChangeText={(e) => handleChangeText(e, 'lastName')}
                        InputStyle={Styles.textInput}
                        value={state.lastName}
                    />
                    <TextInput_
                        placeholder='Email'
                        onChangeText={(e) => handleChangeText(e, 'email')}
                        InputStyle={Styles.textInput}
                        value={state.email}
                    />
                    <TextInput_
                        placeholder='Password'
                        onChangeText={(e) => handleChangeText(e, 'password')}
                        InputStyle={Styles.textInput}
                        value={state.password}
                    />
                    <TextInput_
                        placeholder='Address'
                        onChangeText={(e) => handleChangeText(e, 'address')}
                        InputStyle={Styles.textInput}
                        value={state.address}
                    />
                    <TextInput_
                        placeholder='Phone #'
                        onChangeText={(e) => handleChangeText(e, 'phoneNo')}
                        InputStyle={Styles.textInput}
                        value={state.phoneNo}
                    />
                    <Button_ title='Login' rippleColor={constants.RIPPLE_COLOR} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={Styles.footerText1}>Already have an Account?  </Text>
                        <Text style={Styles.footerText2}>Login</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Registration