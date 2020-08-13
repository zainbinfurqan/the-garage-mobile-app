import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TextInput, Image, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import constants from '../../config/constants'
import TextInput_ from '../../components/Input/TextInput'
import Button_ from '../../components/Button'
function Registration(props) {

    let [padding, setPadding] = useState(0);


    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow);
        Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide);
        return () => {
            Keyboard.removeListener("keyboardDidShow", handleKeyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", handleKeyboardDidHide);
        };
    }, []);

    function handleKeyboardDidShow() {
        setPadding(0)
    }

    function handleKeyboardDidHide() {
        setPadding(0)
    }


    return (
        <SafeAreaView style={[{ flex: 1, justifyContent: 'center', paddingBottom: padding }]}>
            <ScrollView>
                <View style={{ flexGrow: 2, padding: 10, justifyContent: 'center', }}>
                    <View style={{ justifyContent: 'center', margin: 10 }}>
                        <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={require('../../assets/images/logo.png')} />
                    </View>
                    <Text style={{
                        marginBottom: 10,
                        fontWeight: 'bold',
                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                        alignSelf: 'center'
                    }}>Registration</Text>
                    <TextInput_ placeholder='First Name' InputStyle={{
                        height: 40,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: constants.LIGHT_BORDER,
                        borderRadius: constants.INPUT_TEXT_RADIUS
                    }} />
                    <TextInput_ placeholder='Last Name' InputStyle={{
                        height: 40,
                        borderWidth: 1,
                        marginBottom: 10,
                        borderColor: constants.LIGHT_BORDER,
                        borderRadius: constants.INPUT_TEXT_RADIUS
                    }} />
                    <TextInput_ placeholder='Email' InputStyle={{
                        height: 40,
                        borderWidth: 1,
                        marginBottom: 10,
                        borderColor: constants.LIGHT_BORDER,
                        borderRadius: constants.INPUT_TEXT_RADIUS
                    }} />
                    <TextInput_ placeholder='Password' InputStyle={{
                        height: 40,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: constants.LIGHT_BORDER,
                        borderRadius: constants.INPUT_TEXT_RADIUS
                    }} />
                    <TextInput_ placeholder='Phone #' InputStyle={{
                        height: 40,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: constants.LIGHT_BORDER,
                        borderRadius: constants.INPUT_TEXT_RADIUS
                    }} />
                    <Button_ title='Login' rippleColor={constants.RIPPLE_COLOR} />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{
                            marginBottom: 10,
                            fontSize: constants.SMALL_FONT,
                            fontFamily: constants.FONT_SAMSUNG_LIGHT,
                            fontWeight: '400'
                        }}>Already have an Account?  </Text><Text style={{
                            marginBottom: 10,
                            fontWeight: 'bold',
                            fontSize: constants.SMALL_FONT,
                            fontFamily: constants.FONT_SAMSUNG_LIGHT,
                            color: constants.LIGHT_BLUE
                        }}>Login</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Registration