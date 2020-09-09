import React, { } from 'react';
import { View, TextInput, Text } from 'react-native'
import constants from '../../config/constants';

function TextInput_(props) {
    return (
        <View style={{ marginBottom: 5 }}>
            {props.error && <><View style={{ flexDirection: 'row' }}><Text style={{
                marginBottom: 5,
                color: props.error1Color,
                fontFamily: constants.FONT_SAMSUNG_LIGHT,
                fontSize: constants.SMALLEST_FONT * .9
            }}>{props.error}</Text><Text style={{
                marginBottom: 5,
                color: props.error2Color,
                fontFamily: constants.FONT_SAMSUNG_LIGHT,
                fontSize: constants.SMALLEST_FONT * .9
            }}> Error</Text></View></>}
            <TextInput
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor}
                underlineColorAndroid="transparent"
                style={[{ padding: 0, margin: 0, paddingLeft: 5, }, props.InputStyle]}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
            />

        </View>
    )
}

TextInput_.defaultProps = {
    onChangeText: function () { },
    placeholder: '',
    InputStyle: {},
    secureTextEntry: false,
    error2Color: 'red',
    error1Color: 'black'
};

export default TextInput_