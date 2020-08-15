import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import BeforLoginHeader from '../../components/BeforLoginHeader'
import NativeDropDown from '../../components/NativeDropDown'
import TextInput_ from '../../components/Input/TextInput'
import constants from '../../config/constants';
import Button_ from '../../components/Button'
import Style from './style'
const initialState = {
    name: '',
    discription: '',
    picUrl: '',
    category: '',
    price: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_CHANGE_TEXT':
            return { ...state, ...action.payload };
        case 'ON_ERROR':
            return { ...state, errors: action.payload };
        default:
            return state;
    }
}

function Uploadproduct(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [selectedValue, setSelectedValue] = useState("");

    function handleChangeText(value, label) {
        if (label == 'discription') {
            dispatch({
                type: 'ON_CHANGE_TEXT',
                payload: {
                    [label]: value
                },
            });
        } else {
            dispatch({
                type: 'ON_CHANGE_TEXT',
                payload: {
                    [label]: value.trim(),
                },
            });
        }

    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <BeforLoginHeader menuButton={false} backButton={true} />
                <TouchableOpacity style={Style.uploadMain}>
                    <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                    <Text style={Style.uploadText}>Upload picture</Text>
                </TouchableOpacity>
                <View style={{ margin: 10 }}>
                    <NativeDropDown data={constants.CATEGORIES} selectedValue={selectedValue} setSelectedValue={(value) => setSelectedValue(value)} />
                    <TextInput_
                        placeholder='name'
                        onChangeText={(e) => handleChangeText(e, 'name')}
                        InputStyle={Style.textInput}
                        value={state.name}
                    />
                    <TextInput_
                        placeholder='discription'
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(e) => handleChangeText(e, 'discription')}
                        InputStyle={Style.textInputArea}
                        value={state.discription}
                    />
                    <TextInput_
                        placeholder='price'
                        onChangeText={(e) => handleChangeText(e, 'price')}
                        InputStyle={Style.textInput}
                        value={state.price}
                    />
                    <Button_ title='Upload' rippleColor={constants.RIPPLE_COLOR} />
                </View>
            </ScrollView>
        </SafeAreaView >

    )
}

export default Uploadproduct