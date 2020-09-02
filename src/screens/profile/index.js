import React, { } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux'
import healpers from '../../utils/helpers'

import constants from '../../config/constants';
import Style from './style'

function Profile(props) {

    const userData_ = props.route.params.userData

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
                    <Text style={[Style.text, { fontSize: constants.MEDIUM_FONT }]}>{healpers.nameConcatenate(!userData_ ? props.userData : userData_)}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{!userData_ ? props.userData.email : userData_.email}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{!userData_ ? props.userData.phoneNo : userData_.phoneNo}</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>{!userData_ ? props.userData.address : userData_.address}</Text>
                </View>
                <View style={Style.line} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {props.userData.emailVerified
                        ? <Image style={{ height: 20, width: 20, marginRight: 10, }} source={require('../../assets/icons/verified.png')} />
                        :
                        <Image style={{ height: 20, width: 20, marginRight: 10, }} source={require('../../assets/icons/unverified.png')} />}
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
