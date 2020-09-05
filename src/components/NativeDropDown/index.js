import React, { } from 'react'
import { View, Picker, } from 'react-native'
import constants from '../../config/constants'

function NativeDropDown(props) {
    return (
        <View style={{ borderWidth: 0.34, borderColor: constants.LIGHT_BORDER, borderRadius: 5, marginBottom: 5 }}>
            <Picker
                selectedValue={props.selectedValue}
                style={{ height: 50, borderWidth: 1 }}
                prompt='Select Category'
                onValueChange={(itemValue, itemIndex) => { props.setSelectedValue(itemValue) }}
            >
                {props.data.map((item, index) => {
                    return (
                        <Picker.Item key={index} label={item.name} value={item._id} />
                    )
                })}
            </Picker>
        </View>
    )
}

export default NativeDropDown