
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import AfterLoginHeader from '../../../components/AfterLoginHeader'
import IconsInput from '../../../components/Input/IconsInput'
import NoDataFound from '../../../components/NoDataFound'
import CommonAction from '../../../redux/common/action'
import SelectBar from '../../../components/SelectBar'
import constants from '../../../config/constants';
import helper from '../../../utils/helpers';
import api from '../../../utils/apis'
import Style from './style'

function AllPosts(props) {

    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState([])
    const [pendingPost, setPendingPost] = useState([])
    const [searchText, setSearchText] = useState('')
    const [status, setStatus] = useState('All')

    useEffect(() => {
        fetchAllPosts()
    }, [])


    async function fetchAllPosts() {
        setLoading(true)
        try {
            let params = {
                userId: props.userData._id
            }
            const response = await api.fetchAllPosts(null, props.userData.token, null, params);
            setAllPosts(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    async function fetchPendingPost() {
        setLoading(true)
        try {
            const response = await api.fetchPendingPost(null, props.userData.token);
            setPendingPost(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    function optionHandle(value) {
        setStatus(value)
        if (value === 'All') {
            fetchAllPosts()
        }
        if (value === 'Pending') {
            fetchPendingPost()
        }
    }

    async function markApprove(value) {
        props.loading(true)
        try {
            let body = {
                postId: value._id,
                name: value.user.firstName + value.user.lastName,
                sendFrom: props.userData._id,
                sendTo: value.user._id
            }
            const response = await api.approvedPost(body, props.userData.token);
            helper.sendAppLocalNotidication({ to: value.user._id })
            props.loading(false)
            fetchPendingPost()
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function deletePost(data) {
        props.loading(true)
        try {
            let body = { postId: data._id }
            props.apiresponse({ flag: true, isError: false, isSuccess: true, message: 'Delete Successfully' })
            const response = await api.deleteUserPost(body, props.userData.token);
            props.loading(false)
            fetchAllPosts()
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={Style.mainContainer}>
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='All Posts' />}
            <SelectBar option1='All' option2='Pending' selectedStatus={status} optionHandle={optionHandle} />
            <View style={{ justifyContent: 'center', marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
                <IconsInput
                    viewStyle={{ borderRadius: 50 }}
                    placeholder='Enter name'
                    onChangeText={(e) => setSearchText(e)}
                    value={searchText}
                    Icon={require('../../../assets/icons/search.png')}
                    InputStyle={Style.textInput} />
            </View>
            <ScrollView style={Style.scrollMain}>
                {loading && <ActivityIndicator color={constants.LIGHT_BLUE} />}
                {status === 'All' && allPosts.length == 0 && !loading && <NoDataFound />}
                {status === 'Pending' && pendingPost.length == 0 && !loading && <NoDataFound />}
                {!loading && status === 'All' && allPosts.length > 0 && allPosts.map((item, index) => {
                    return (
                        <View key={index} style={Style.mainCard}>
                            <View style={Style.left}>
                                <Text style={Style.leftText1}>{helper.nameConcatenate(item.user)}   {props.userData._id === item.user._id && '(Your)'}</Text>
                                <View style={Style.line}></View>
                                <Text style={Style.leftText2}>{item.discription.substring(1, 100)}...</Text>
                            </View>
                            <View style={Style.right}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('EditableView', { postData: item })} style={Style.openIcon}>
                                    <Image style={Style.openIcon} source={require('../../../assets/icons/edit.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deletePost(item)} style={Style.openIcon}>
                                    <Image style={Style.openIcon} source={require('../../../assets/icons/delete.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
                {!loading && status === 'Pending' && pendingPost.length > 0 && pendingPost.map((items, index) => {
                    return (
                        <View key={index} style={Style.pendingMainCard}>
                            <View style={Style.nameMain}>
                                <Text style={Style.name}>{helper.nameConcatenate(items.user)}</Text>
                            </View>
                            <View style={Style.postMain}>
                                <Text style={Style.post}>{items.discription.substring(1, 100)}...</Text>
                            </View>
                            <View style={Style.option}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetailView', { postData: items })} style={Style.viewMain}>
                                    <Text style={Style.viewName}>View</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('EditableView', { postData: items })} style={Style.editMain}>
                                    <Text style={Style.editName}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => markApprove(items)} style={Style.approveMain}>
                                    <Text style={Style.approveName}>Mark Approve</Text>
                                </TouchableOpacity>
                            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
