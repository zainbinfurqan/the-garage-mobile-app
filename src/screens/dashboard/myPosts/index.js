import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import NoDataFound from '../../../components/NoDataFound'
import constants from '../../../config/constants';
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
            const response = await api.fetchMyPost(null, null, null, params);
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


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
