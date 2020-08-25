import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import AfterLoginHeader from '../../../components/AfterLoginHeader'
import CommonAction from '../../../redux/common/action'
import constants from '../../../config/constants';
import Style from './style'
import moment from 'moment'
import apis from '../../../utils/apis';
import helper from '../../../utils/helpers';

function AllUsers(props) {

    const [users, setUserList] = useState([])

    useState(() => {
        fetchAllUsers()
    }, [])

    async function fetchAllUsers() {
        try {
            const response = await apis.fetchAllUsers();
            setUserList(response)
        } catch (error) {
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            {/* {!props.isLogin && <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />} */}
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='System Users' />}
            {users.length == 0 && <ActivityIndicator color={constants.LIGHT_BLUE} />}
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    item._id != props.userData._id &&
                    <View style={[Style.messageCardMain, {}]}>
                        <View style={{ flex: .1, }}>
                            <View style={Style.nameMain}>
                                <Text style={Style.nameChar}>{item.firstName[0].toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={{ flex: .6, justifyContent: 'center' }}>
                            <Text style={Style.name}>{helper.nameConcatenate(item)}</Text>
                        </View>
                        <View style={{ flex: .3, flexDirection: 'row', justifyContent: 'space-around', }}>
                            <TouchableOpacity style={Style.option}><Text style={Style.option}>View</Text></TouchableOpacity>
                            <TouchableOpacity style={[Style.option]}><Text style={[Style.option, { color: constants.RED }]}>Block</Text></TouchableOpacity>
                        </View>
                    </View>
                )}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    // logout: AuthActions.logout
    loading: CommonAction.loading,
    apiresponse: CommonAction.apirespons
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
