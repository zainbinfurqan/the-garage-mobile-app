
import React, { useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import NoDataFound from '../../../components/NoDataFound'
import constants from '../../../config/constants';
import Style from './style'

function SoldOut(props) {

    const [loading, serLoading] = useState(false)

    return (
        <SafeAreaView style={Style.mainContainer}>
            <ScrollView style={Style.scrollMain}>
                {constants.MY_POSTS.length == 0 && !loading && <NoDataFound />}
                {loading && <ActivityIndicator color={constants.LIGHT_BLUE} />}
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