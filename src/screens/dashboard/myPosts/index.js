import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import NoDataFound from '../../../components/NoDataFound'
import constants from '../../../config/constants';
import helper from '../../../utils/helpers';
import api from '../../../utils/apis'
import Style from './style'

function MyPosts(props) {

    const [loading, setLoading] = useState(false)
    const [myPost, setMyPost] = useState([])

    useEffect(() => {
        fetchMyPost()
    }, [])


    async function fetchMyPost() {
        setLoading(true)
        try {
            let params = {
                userId: props.userData._id
            }
            const response = await api.fetchMyPost(null, props.userData.token, null, params);
            setMyPost(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={Style.mainContainer}>
            <ScrollView style={Style.scrollMain}>
                {loading && <ActivityIndicator color={constants.LIGHT_BLUE} />}
                {myPost.length == 0 && !loading && <NoDataFound />}
                {!loading && myPost.map((item, index) => {
                    return (
                        <View key={index} style={Style.mainCard}>
                            <View style={Style.left}>
                                <Text style={Style.leftText1}>{helper.nameConcatenate(item.user)}</Text>
                                <View style={Style.line}></View>
                                <Text style={Style.leftText2}>{item.discription.substring(1, 100)}...</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}>
                                <TouchableOpacity style={{ flex: .5 }}>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT * 1.2,
                                        alignSelf: 'center'
                                    }}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: .5 }}>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT * 1.2,
                                        alignSelf: 'center'
                                    }}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity style={Style.right}>
                                <Image style={Style.openIcon} source={require('../../../assets/icons/back.png')} />
                            </TouchableOpacity> */}
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
