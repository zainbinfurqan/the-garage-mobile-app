import React, { } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux'

import constants from '../../config/constants';
import Style from './style'

function Profile(props) {
    return (
        <SafeAreaView style={Style.containerMain}>
            <TouchableOpacity onPress={() => props.navigation.pop()} style={{ padding: 10, }}>
                <Image style={{ height: 30, width: 30 }} source={require('../../assets/icons/back.png')} />
            </TouchableOpacity>
            <View style={Style.profileMain}>
                <Image style={Style.profilePic} source={require('../../assets/images/default-profile-1.png')} />
            </View>
            <View style={{ padding: 10 }}>
                <View style={{}}>
                    <Text style={Style.text}>{props.userData.name}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{props.userData.email}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{props.userData.phone}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{props.userData.address}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{props.userData.emailVerified ? 'Verified' : 'Un verified'}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    // saveUserData: AuthActions.saveUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
