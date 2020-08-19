import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import constants from '../../config/constants';
import Style from './style'
import Intrested from './intrested'
import MyPosts from './myPosts'
import SoldOut from './soldOut'

function Dashboard(props) {
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)

    function switchTab(value) {
        if (value == 1) {
            setTab1(true)
            setTab2(false)
            setTab3(false)
        }
        if (value == 2) {
            setTab1(false)
            setTab2(true)
            setTab3(false)
        }
        if (value == 3) {
            setTab1(false)
            setTab2(false)
            setTab3(true)
        }
    }

    return (
        <SafeAreaView style={Style.dashboardMain}>
            {!props.isLogin && <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />}
            {props.isLogin && <AfterLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />}
            <View style={Style.switchTabsMain}>
                <TouchableOpacity onPress={() => switchTab('1')} style={[Style.switchTab, tab1 && { backgroundColor: constants.LIGHT_BLUE }]}>
                    <Text style={[Style.switchTabText, tab1 && { color: 'white' }]}>My posts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => switchTab('2')} style={[Style.switchTab, tab2 && { backgroundColor: constants.LIGHT_BLUE }]}>
                    <Text style={[Style.switchTabText, tab2 && { color: 'white' }]}>Intrested</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => switchTab('3')} style={[Style.switchTab, tab3 && { backgroundColor: constants.LIGHT_BLUE }]}>
                    <Text style={[Style.switchTabText, tab3 && { color: 'white' }]}>Your purchase</Text>
                </TouchableOpacity>
            </View>
            <View style={Style.line} />
            {tab1 && <MyPosts />}
            {tab2 && <Intrested />}
            {tab3 && <SoldOut />}

        </SafeAreaView>
    )
}



const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
