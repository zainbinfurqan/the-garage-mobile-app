
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import NoDataFound from '../../../components/NoDataFound'
import AfterLoginHeader from '../../../components/AfterLoginHeader'
import constants from '../../../config/constants';
import api from '../../../utils/apis'
import Style from './style'
import helper from '../../../utils/helpers';

function AllPosts(props) {

    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        fetchAllPosts()
    }, [])


    async function fetchAllPosts() {
        setLoading(true)
        try {
            let params = {
                userId: props.userData._id
            }
            const response = await api.fetchAllPosts(null, null, null, params);
            console.log("response=>", response)
            setAllPosts(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={Style.mainContainer}>
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='All Posts' />}
            <ScrollView style={Style.scrollMain}>
                {loading && <ActivityIndicator color={constants.LIGHT_BLUE} />}
                {allPosts.length == 0 && !loading && <NoDataFound />}
                {!loading && allPosts.length > 0 && allPosts.map((item, index) => {
                    return (
                        <View key={index} style={Style.mainCard}>
                            <View style={Style.left}>
                                <Text style={Style.leftText1}>{helper.nameConcatenate(item.user)}</Text>
                                <View style={Style.line}></View>
                                <Text style={Style.leftText2}>{item.discription.substring(1, 100)}...</Text>
                            </View>
                            <View style={Style.right}>
                                <TouchableOpacity style={Style.openIcon}><Image style={Style.openIcon} source={require('../../../assets/icons/edit.png')} /></TouchableOpacity>
                                <TouchableOpacity style={Style.openIcon}><Image style={Style.openIcon} source={require('../../../assets/icons/delete.png')} /></TouchableOpacity>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
