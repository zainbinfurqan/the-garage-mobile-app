
import React, { } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import constants from '../../../config/constants';
import Style from './style'

function SoldOut(props) {
    return (
        <SafeAreaView style={Style.mainContainer}>
            <ScrollView style={Style.scrollMain}>
                {constants.MY_POSTS.map((item, index) => {
                    return (
                        <View key={index} style={Style.mainCard}>
                            <View style={Style.left}>
                                <Text style={Style.leftText1}>John Kean</Text>
                                <Text style={Style.leftText2}>this is my post and i ll see this aksd aksd askdas kndaskln dasklnd asn..</Text>
                            </View>
                            <TouchableOpacity style={Style.right}>
                                <Image style={Style.openIcon} source={require('../../../assets/icons/back.png')} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default SoldOut