import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity, Text, Image } from 'react-native'
import { connect, } from 'react-redux'

import AfterLoginHeader from '../../../components/AfterLoginHeader'
import NoDataFound from '../../../components/NoDataFound'
import CommonAction from '../../../redux/common/action'
import apis from '../../../utils/apis';
import Style from './style'
import constants from '../../../config/constants';
import helper from '../../../utils/helpers';

function PendingPosts(props) {

    const [pendingPosts, setPendingPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchPendingPost()
    }, [])

    async function fetchPendingPost() {
        setLoading(true)
        try {
            const response = await apis.fetchPendingPost();
            setPendingPosts(response)
            console.log(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function markApprove(value) {
        props.loading(true)
        try {
            let body = { postId: value }
            const response = await apis.approvedPost(body);
            console.log(response)
            props.loading(false)
            fetchPendingPost()
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }


    return (
        <SafeAreaView style={Style.container}>
            <AfterLoginHeader backButton={true} menuButton={false} headerText='Pending Posts' />
            {!loading && pendingPosts.length === 0 && <NoDataFound />}
            {loading && <ActivityIndicator color={constants.LIGHT_BLUE} />}
            {pendingPosts.length > 0 && pendingPosts.map((items, index) => {
                return (
                    <View style={Style.mainCard}>
                        <View style={Style.nameMain}>
                            <Text style={Style.name}>{helper.nameConcatenate(items.user)}</Text>
                        </View>
                        <View style={Style.postMain}>
                            <Text style={Style.post}>{items.discription.substring(1, 100)}...</Text>
                        </View>
                        <View style={Style.option}>
                            <TouchableOpacity style={Style.viewMain}>
                                <Text style={Style.viewName}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.editMain}>
                                <Text style={Style.editName}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => markApprove(items._id)} style={Style.approveMain}>
                                <Text style={Style.approveName}>Mark Approve</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
    loading: CommonAction.loading,
    apiresponse: CommonAction.apirespons
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingPosts);
