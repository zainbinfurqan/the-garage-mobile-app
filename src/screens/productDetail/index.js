import React, { } from 'react';
import { View, SafeAreaView, Dimensions, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import CommonAction from '../../redux/common/action'
import constants from '../../config/constants';
import Style from './style'
import apis from '../../utils/apis';
const { width, height } = Dimensions.get('window')

function ProductDetailView(props) {
    const postData = props.route.params.postData;

    function navigateToLogin() {
        props.apiresponse({ flag: true, isError: true, isSuccess: false, message: 'Please login first' })
    }

    // async function markIntrested() {
    //     try {

    //     } catch (error) {
    //         props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
    //     }
    // }

    async function fnIntrested() {
        try {
            if (props.isLogin) {
                if (postData.intrested.includes(props.userData._id)) {
                    const response = await apis.markIntrested({ user: postData._id })
                    if (response.message == "Successfull") {
                        props.navigation.pop()
                    }
                } else {
                    const response = await apis.markUnIntrested({ userId: props.userData._id, intrested: postData.intrested, _id: postData._id })
                    if (response.message == "Successfull") {
                        props.navigation.pop()
                    }
                }
            }
        } catch (error) {
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    // async function markUnIntrested() {
    //     try {
    //         const response = await apis.markUnIntrested({ userId: props.userData._id, intrested: postData.intrested, _id: postData._id })
    //         if (response.message == "Successfull") {
    //             props.navigation.pop()
    //         }
    //     } catch (error) {
    //         props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
    //     }
    // }

    async function goToChat() {

    }

    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <View style={{ borderColor: 'white', }}>
                    <TouchableOpacity onPress={() => props.navigation.pop()}>
                        <Image style={{ height: 30, width: 30, margin: 5 }} source={require('../../assets/icons/back.png')} />
                    </TouchableOpacity>
                    <View style={{ borderColor: 'black', height: 200, margin: 10 }}>
                        <Image style={{ height: 200, alignSelf: 'center' }} source={require('../../assets/images/default-post.png')} />
                    </View>
                    <View style={{ margin: 10 }}>
                        {/* <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/discription.png')} />
                            <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>Description</Text>
                        </View> */}
                        <Text style={{
                            color: constants.GERY, fontFamily: constants.FONT_SAMSUNG_LIGHT,
                            fontSize: constants.SMALL_FONT * 1.2
                        }}>{postData.discription}</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={Style.categoryMain}>
                            <Text style={Style.categoryText}>{postData.category.name}</Text>
                        </View>
                        <View style={Style.line} />
                        <View style={{}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/money.png')} />
                                <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>{postData.priceRange}</Text>
                            </View>
                        </View>
                        <View style={Style.line} />
                        <View style={{}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/mobile.png')} />
                                <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>{postData.user.phoneNo}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Style.line} />
                    <View style={[{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        margin: 10
                    },]}>
                        {/* <TouchableOpacity onPress={props.isLogin ? postData.intrested.includes(props.userData._id) ? markUnIntrested : markIntrested : navigateToLogin} */}
                        <TouchableOpacity onPress={props.isLogin ? fnIntrested : navigateToLogin}
                            style={[{
                                borderWidth: 0.34,
                                borderColor: constants.LIGHT_BORDER,
                                flex: .45, padding: 5,
                                justifyContent: 'center'
                            }, props.isLogin && postData.intrested.includes(props.userData._id) && { borderColor: constants.LIGHT_BLUE, backgroundColor: constants.LIGHT_BLUE }]}>
                            <Text style={[Style.intrested, props.isLogin && postData.intrested.includes(props.userData._id) && { color: 'white' }]}>{props.isLogin && postData.intrested.includes(props.userData._id) ? "Make Un-Intrested" : "Intrested?"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.isLogin ? goToChat : navigateToLogin} style={{ borderWidth: 0.34, borderColor: constants.LIGHT_BORDER, flex: .45, padding: 5, justifyContent: 'center' }}>
                            <Text style={Style.textMe} >Text Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    apiresponse: CommonAction.apiresponse
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
