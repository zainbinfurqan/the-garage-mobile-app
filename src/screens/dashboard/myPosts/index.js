import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import NoDataFound from '../../../components/NoDataFound'
import CommonAction from '../../../redux/common/action'
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

    async function deletePostFN(data) {
        props.loading(true)
        try {
            let body = { postId: data._id }
            const response = await api.deletePost(body, props.userData.token);
            props.loading(false)
            fetchMyPost()
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
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
                                <TouchableOpacity onPress={() => props.navigateProps.navigation.navigate('EditableView', { postData: item })} style={{ flex: .5 }}>
                                    <Text style={Style.optionText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deletePostFN(item)} style={{ flex: .5 }}>
                                    <Text style={Style.optionText}>Delete</Text>
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
    apiresponse: CommonAction.apirespons,
    loading: CommonAction.loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
