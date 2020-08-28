import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native'
import constant from '../../config/constants'
import Style from './style'

function SelectBar(props) {
    return (
        <View style={Style.selectmain}>
            <TouchableOpacity onPress={() => props.optionHandle(props.option1)} style={[Style.optionLeftMain, props.selectedStatus === props.option1 && { backgroundColor: constant.LIGHT_BLUE }]}>
                <Text style={[Style.optionLeftText, props.selectedStatus === props.option1 && { color: 'white' }]}>{props.option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.optionHandle(props.option2)} style={[Style.optionRightMain, props.selectedStatus === props.option2 && { backgroundColor: constant.LIGHT_BLUE }]}>
                <Text style={[Style.optionRightText, props.selectedStatus === props.option2 && { color: 'white' }]}>{props.option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

SelectBar.defaultProps = {
    optionHandle: function () { },
    option1: '',
    option2: '',
    selectedStatus: ''
}

export default SelectBar