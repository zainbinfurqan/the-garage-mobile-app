import React, { } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native'
import Ripple from 'react-native-material-ripple';
import constants from '../../config/constants';

function Button_(props) {
    return (
        <Ripple
            onPress={props.onPress}
            rippleColor={props.rippleColor}
            style={[{
                backgroundColor: constants.LIGHT_BLUE,
                height: 40,
                borderRadius: 5,
                justifyContent: 'center'
            }, props.buttonStyle,]}>
            <TouchableOpacity>
                <Text style={[{ color: 'white', alignSelf: 'center', fontFamily: constants.FONT_SAMSUNG_LIGHT }, props.textStyle]}>{props.title}</Text>
            </TouchableOpacity>
        </Ripple>

    )
}

export default Button_;