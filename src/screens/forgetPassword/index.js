import React, { useReducer, useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, TextInput, Image, ImageBackground } from 'react-native'
import TextInput_ from '../../components/Input/TextInput'
import constants from '../../config/constants'
import Button_ from '../../components/Button'
import Styles from './style'

const initialState = {
    email: '',
    code: 0,
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


function ForgetPassword(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [codeSend, setCodeSend] = useState(false)

    function handleChangeText(value, label) {
        dispatch({
            type: 'ON_CHANGE_TEXT',
            payload: {
                [label]: value.trim(),
            },
        });
    }


    return (
        <ImageBackground source={require('../../assets/images/bg-1.png')} style={Styles.container}>
            <View style={Styles.form}>
                <View style={Styles.logoMain}>
                    <Image style={Styles.logo} source={require('../../assets/images/logo.png')} />
                </View>
                <Text style={Styles.headingText}>Forget Password</Text>
                <TextInput_
                    placeholder='Email'
                    onChangeText={(e) => handleChangeText(e, 'email')}
                    value={state.email}
                    InputStyle={Styles.textInput} />
                {codeSend && <TextInput_
                    placeholder='Code'
                    onChangeText={(e) => handleChangeText(e, 'code')}
                    value={state.code}
                    secureTextEntry={true}
                    InputStyle={Styles.textInput} />}
                <Button_ title='Send Code' rippleColor={constants.RIPPLE_COLOR} />
            </View>
        </ImageBackground>
    )
}

export default ForgetPassword