import React, { useState, useEffect, useReducer } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, Image, KeyboardAvoidingView, Keyboard, ImageBackground, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import TextInput_ from '../../components/Input/TextInput'
import CommonAction from '../../redux/common/action'
import AuthActions from '../../redux/auth/action'
import constants from '../../config/constants'
import Button_ from '../../components/Button'
import api from '../../utils/apis'
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
    const emailRegx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const name = /^[a-zA-Z]+$/;
    const phoneNo = /^[0-9]*$/;
    const [error, setError] = useState({})


    function handleChangeText(value, label) {
        dispatch({
            type: 'ON_CHANGE_TEXT',
            payload: {
                [label]: value,
            },
        });
    }

    // async function userRegistration() {
    //     try {
    //         let body = {
    //             firstName: state.firstName,
    //             lastName: state.lastName,
    //             email: state.email,
    //             password: state.password,
    //             address: state.address,
    //             phone: state.phone,

    //         }
    //         const response = await api.registration(body);
    //         response !== undefined && props.saveUserData(response)
    //         props.navigation.replace('MainScreen')

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async function userRegistration() {
        try {
            const isValidated = checkValidation();
            if (isValidated) {
                props.loading(true)
                let body = {
                    firstName: state.firstName.trim(),
                    lastName: state.lastName.trim(),
                    email: state.email.trim(),
                    password: state.password.trim(),
                    address: state.address.trim(),
                    phoneNo: state.phoneNo.trim(),
                }
                const response = await api.registration(body);
                response !== undefined && props.saveUserData(response)
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
        if (!state.firstName.trim()) {
            errors.firstName = 'This field is required';
        } else {
            if (state.firstName.trim().length < 3) {
                errors.firstName = 'Characters must be more then 3 ';
            } else {
                if (!name.test(state.firstName.trim())) {
                    errors.firstName = 'Invalid name formate';
                }
            }
        }

        if (!state.lastName.trim()) {
            errors.lastName = 'This field is required';
        } else {
            if (state.lastName.trim().length < 3) {
                errors.lastName = 'Characters must be more then 3 ';
            } else {
                if (!name.test(state.lastName.trim())) {
                    errors.lastName = 'Invalid name formate';
                }
            }
        }

        if (!state.email.trim()) {
            errors.email = 'This field is required';
        } else {
            if (!emailRegx.test(state.email.trim())) {
                errors.email = 'Invalid email formate';
            }
        }

        if (!state.password.trim()) {
            errors.password = 'This field is required';
        } else {
            if (state.password.trim().length < 8) {
                errors.password = 'Characters must be more then 7 ';
            }
        }

        if (!state.address.trim()) {
            errors.address = 'This field is required';
        }
        if (!state.phoneNo.trim()) {
            errors.phoneNo = 'This field is required';
        } else {
            if (!phoneNo.test(state.phoneNo.trim())) {
                errors.phoneNo = 'Invalid number formate';
            } else {
                if (state.phoneNo.trim().length < 11) {
                    errors.phoneNo = 'Phone no invalid';
                }
            }
        }

        setError(errors)

        return !Object.keys(errors).length;
    }



    return (
        <ImageBackground source={require('../../assets/images/bg-2.png')} style={[Styles.container]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}>
                <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => props.navigation.pop()}>
                    <Image style={{ height: 30, width: 30, margin: 10 }} source={require('../../assets/icons/back-white.png')} />
                </TouchableOpacity>
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
                        error1Color='white'
                        error2Color='#FFD40B'
                        placeholderColor='white'
                        error={error && error.firstName}
                    />
                    <TextInput_
                        placeholder='Last Name'
                        onChangeText={(e) => handleChangeText(e, 'lastName')}
                        InputStyle={Styles.textInput}
                        value={state.lastName}
                        error1Color='white'
                        error2Color='#FFD40B'
                        placeholderColor='white'
                        error={error && error.lastName}
                    />
                    <TextInput_
                        placeholder='Email'
                        onChangeText={(e) => handleChangeText(e, 'email')}
                        InputStyle={Styles.textInput}
                        value={state.email}
                        error1Color='white'
                        error2Color='#FFD40B'
                        placeholderColor='white'
                        error={error && error.email}
                    />
                    <TextInput_
                        placeholder='Password'
                        onChangeText={(e) => handleChangeText(e, 'password')}
                        InputStyle={Styles.textInput}
                        value={state.password}
                        error1Color='white'
                        error2Color='#FFD40B'
                        placeholderColor='white'
                        error={error && error.password}
                    />
                    <TextInput_
                        placeholder='Address'
                        onChangeText={(e) => handleChangeText(e, 'address')}
                        InputStyle={Styles.textInput}
                        value={state.address}
                        error1Color='white'
                        error2Color='#FFD40B'
                        placeholderColor='white'
                        error={error && error.address}
                    />
                    <TextInput_
                        placeholder='Phone #'
                        onChangeText={(e) => handleChangeText(e, 'phoneNo')}
                        InputStyle={Styles.textInput}
                        value={state.phoneNo}
                        error1Color='white'
                        error2Color='#FFD40B'
                        placeholderColor='white'
                        error={error && error.phoneNo}
                    />
                    <Button_ bgColor={'white'}
                        onPress={userRegistration}
                        title='Registration'
                        textStyle={{ color: constants.RED }}
                        rippleColor={constants.RIPPLE_COLOR} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Login')}>
                            <Text style={Styles.footerText1}>Already have an Account?</Text>
                        </TouchableOpacity>
                        <Text style={Styles.footerText2}>Login</Text>
                    </View>
                </View>
            </ScrollView>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
