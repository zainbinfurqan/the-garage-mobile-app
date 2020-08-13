import React, { } from 'react';
import { View, SafeAreaView, Text, TextInput, Image } from 'react-native'
import constants from '../../config/constants'
import TextInput_ from '../../components/Input/TextInput'
import Button_ from '../../components/Button'

function Login(props) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: constants.BACKGROUND_1 }}>
            <View style={{ flexGrow: 2, padding: 10, justifyContent: 'center', marginTop: -50 }}>
                <View style={{ justifyContent: 'center', margin: 10 }}>
                    <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={require('../../assets/images/logo.png')} />
                </View>
                <Text style={{
                    marginBottom: 10,
                    fontFamily: constants.FONT_SAMSUNG_LIGHT
                }}>Login to your Account</Text>
                <TextInput_ placeholder='Email' InputStyle={{
                    height: 40,
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: constants.LIGHT_BORDER,
                    borderRadius: constants.INPUT_TEXT_RADIUS
                }} />
                <TextInput_ placeholder='Password' InputStyle={{
                    height: 40,
                    marginBottom: 10,
                    borderColor: constants.LIGHT_BORDER,
                    borderWidth: 1,
                    borderRadius: constants.INPUT_TEXT_RADIUS
                }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        marginBottom: 10,
                        fontWeight: '100',
                        fontSize: constants.SMALL_FONT,
                        fontFamily: constants.FONT_SAMSUNG_LIGHT
                    }}>Dont have a Account?  </Text><Text style={{
                        marginBottom: 10,
                        fontWeight: 'bold',
                        fontSize: constants.SMALL_FONT,
                        color: constants.LIGHT_BLUE
                    }}>Sinup here</Text>
                </View>
                <Button_ title='Login' rippleColor={constants.RIPPLE_COLOR} />
            </View>
            {/* </View> */}
        </SafeAreaView>
    )
}

export default Login