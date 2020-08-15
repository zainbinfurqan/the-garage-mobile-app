import React, { } from 'react';
import { View, TextInput } from 'react-native'

function TextInput_(props) {
    return (
        <View>
            <TextInput
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                placeholder={props.placeholder}
                underlineColorAndroid="transparent"
                style={[{ padding: 0, paddingLeft: 5, }, props.InputStyle]}
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
    secureTextEntry: false
};

export default TextInput_