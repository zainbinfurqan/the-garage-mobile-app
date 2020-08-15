import React, { } from 'react';
import { View, TextInput, Image } from 'react-native'
import constants from '../../config/constants';

function IconTextInput(props) {
    return (
        <View style={{ flexDirection: 'row', borderWidth: 0.34, borderColor: constants.LINE_COLOR }}>
            <TextInput
                placeholder={props.placeholder}
                underlineColorAndroid="transparent"
                style={[{ flex: 0.85, padding: 0 }, props.InputStyle]}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
            />
            <View style={{ flex: 0.15, justifyContent: 'center' }}>
                <Image style={{ height: 22, width: 22, alignSelf: 'center' }} source={require('../../assets/icons/money.png')} />

            </View>
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