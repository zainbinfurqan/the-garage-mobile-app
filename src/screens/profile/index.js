import React, { } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Style from './style'
import constants from '../../config/constants';
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
                    <Text style={Style.text}>Zain Ahmed</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>zain.ahmed199524@gmail.com</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>03022408099</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>usamnia colony nazimabad no 1</Text>
                </View>
                <View style={Style.line} />
                <View style={{}}>
                    <Text style={Style.text}>Unverfied Account</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Profile;