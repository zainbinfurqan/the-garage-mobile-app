import React, { } from 'react';
import { View, TextInput } from 'react-native'

function TextInput_(props) {
    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                style={[{}]}
                style={props.InputStyle}
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
    value: '',
    InputStyle: {},
    secureTextEntry: false
};

export default TextInput_