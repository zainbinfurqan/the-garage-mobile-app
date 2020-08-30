import React, { } from 'react';
import { SafeAreaView, View, Text, Modal, TouchableOpacity } from 'react-native'
import Style from './style'
import constants from '../../config/constants';

function SelectOption(props) {
    return (
        <Modal animationType="slide" transparent={true} visible={props.open}>
            <View style={Style.modelMain}>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                }}>
                    <View style={{
                        backgroundColor: constants.LIGHT_BLUE,
                        justifyContent: 'center',
                        padding: 5,
                        paddingBottom: 15,
                        borderTopEndRadius: 9,
                        borderTopStartRadius: 9,
                        paddingTop: 15,
                    }}>
                        <Text style={{
                            color: 'white',
                            fontFamily: constants.FONT_SAMSUNG_LIGHT,
                            alignSelf: 'center'
                        }}>Select option</Text>
                    </View>
                    {props.data.map((item, index) => {
                        return (
                            <>
                                {/* <View style={Style.line}></View> */}
                                <TouchableOpacity key={index} onPress={() => props.selectitem(item.title)} style={[{
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    borderBottomWidth: 0.35,
                                    borderColor: constants.LIGHT_BORDER,
                                    margin: 5,
                                    paddingBottom: 20, paddingTop: 20,
                                }, index == props.data.length - 1 && { borderBottomStartRadius: 9, borderBottomEndRadius: 9, }]}>
                                    <Text style={{
                                        color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        alignSelf: 'center'
                                    }}>{item.title}</Text>
                                </TouchableOpacity>
                                {/* <View style={Style.line}></View> */}
                            </>
                        )
                    })}
                </View>
            </View>
        </Modal>
    )
}

export default SelectOption