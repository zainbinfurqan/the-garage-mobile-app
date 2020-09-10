import React, { } from 'react';
import { SafeAreaView, View, Text, Modal, TouchableOpacity } from 'react-native'
import Style from './style'
import constants from '../../config/constants';
import { ScrollView } from 'react-native-gesture-handler';

function SelectOption(props) {
    return (
        <Modal animationType="slide" transparent={true} visible={props.open}>
            <View style={Style.modelMain}>
                <View style={Style.main}>
                    <View style={Style.headermain}>
                        <TouchableOpacity onPress={props.closeHandle} style={Style.closeMain}>
                            <Text style={Style.closeText}>X</Text>
                        </TouchableOpacity>
                        <Text style={Style.headerText}>Select option</Text>
                    </View>
                    <ScrollView style={[
                        { marginBottom: 5, },
                        props.data.length > 7 && { height: 550 }
                    ]}>
                        {props.data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => props.selectitem(item)} style={[Style.selectMain, index == props.data.length - 1 && { borderBottomStartRadius: 9, borderBottomEndRadius: 9, }]}>
                                    <Text style={Style.selectText}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </Modal >
    )
}

export default SelectOption