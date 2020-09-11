import React, { } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native'
import Ripple from 'react-native-material-ripple';
import constants from '../../config/constants';

function Button_(props) {
    return (
        <Ripple
            disabled={props.disabled}
            onPress={props.onPress}
            rippleColor={props.rippleColor}
            style={[{
                backgroundColor: props.bgColor,
                height: 40,
                borderRadius: 5,
                justifyContent: 'center'
            }, props.buttonStyle,]}>
            <TouchableOpacity>
                <Text style={[{ alignSelf: 'center', fontFamily: constants.FONT_SAMSUNG_LIGHT }, props.textStyle]}>{props.title}</Text>
            </TouchableOpacity>
        </Ripple>

    )
}

Button_.defaultProps = {
    onPress: function () { },
    bgColor: constants.LIGHT_BLUE
};


export default Button_;