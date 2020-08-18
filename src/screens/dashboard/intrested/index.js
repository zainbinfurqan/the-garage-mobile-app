
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import constants from '../../../config/constants';
import api from '../../../utils/apis'
import Style from './style'

function Intrested(props) {

    const [loading, setLoading] = useState(false)
    const [myIntreste, setMyIntreste] = useState([])

    useEffect(() => {
        fetchMyIntrest()
    }, [])


    async function fetchMyIntrest() {
        setLoading(true)
        try {
            let params = {
                userId: props.userData._id
            }
            const response = await api.fetchMyIntrest(null, null, null, params);
            setMyIntreste(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={Style.mainContainer}>
            <ScrollView style={Style.scrollMain}>
                {loading && <ActivityIndicator color='red' />}
                {!loading && myIntreste.map((item, index) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Intrested);
