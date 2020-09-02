import React, { } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native'
import constants from '../../config/constants';

function IconTextInput(props) {
    return (
        <View style={[{
            flexDirection: 'row',
            height: 40,
            justifyContent: 'center',
            borderWidth: 0.34,
            borderColor: constants.LINE_COLOR
        }, props.viewStyle]}>
            <TextInput
                placeholder={props.placeholder}
                underlineColorAndroid="transparent"
                style={[{ flex: 0.85, padding: 0, paddingLeft: 10 }, props.InputStyle]}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity onPress={props.onPress} style={{ flex: 0.15, justifyContent: 'center', height: 40 }}>
                <Image style={{ height: 22, width: 22, alignSelf: 'center' }} source={props.Icon} />
            </TouchableOpacity>
        </View>
    )
}

IconTextInput.defaultProps = {
    onChangeText: function () { },
    placeholder: '',
    value: '',
    InputStyle: {},
    secureTextEntry: false
};

export default IconTextInput