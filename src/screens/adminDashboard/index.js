import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import { connect, } from 'react-redux'

import AfterLoginHeader from '../../components/AfterLoginHeader'
import constants from '../../config/constants';

function AdminDashbaord(props) {

    const [options, setOption] = useState([
        { titile: 'Total Posts', iconsPath: require('../../assets/icons/posts.png'), navigatePath: 'AllPosts' },
        { titile: 'Total Users', iconsPath: require('../../assets/icons/registration.png'), navigatePath: 'AllUsers' },
        { titile: 'Pending Users', iconsPath: require('../../assets/icons/posts.png'), navigatePath: 'PendingPosts' },
    ])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <AfterLoginHeader backButton={true} menuButton={false} headerText='Admin Dashboard' />
            <FlatList
                contentContainerStyle={{ flexGrow: 1, }}
                data={options}
                renderItem={({ item }) => (
                    <View style={{
                        marginLeft: 2,
                        marginRight: 2,
                        marginBottom: 10,
                        width: '49%',
                        height: 140,
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate(item.navigatePath)} style={{
                            padding: 10,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 5,
                            borderWidth: 0.34,
                            width: "60%",
                            borderColor: constants.LIGHT_BORDER,
                        }}>
                            <Image style={{ height: 35, width: 35, alignSelf: "center" }} source={item.iconsPath} />
                            <Text style={{
                                fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                fontSize: constants.SMALL_FONT * 1.2,
                                alignSelf: 'center'
                            }}>{item.titile}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashbaord);
