import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import AfterLoginHeader from '../../../components/AfterLoginHeader'
import IconsInput from '../../../components/Input/IconsInput'
import CommonAction from '../../../redux/common/action'
import constants from '../../../config/constants';
import Style from './style'
import moment from 'moment'
import apis from '../../../utils/apis';
import helper from '../../../utils/helpers';

function AllUsers(props) {

    const [users, setUserList] = useState([])
    const [searchText, setSearchText] = useState('')
    const [laoding, setLaoding] = useState(false)

    useState(() => {
        fetchAllUsers('')
    }, [])

    async function fetchAllUsers(value) {
        setLaoding(true)
        try {
            let params = { firstName: value == '' ? searchText : value }
            const response = await apis.searchUsersAdmin(null, null, null, params);
            setUserList(response)
            setLaoding(false)
        } catch (error) {
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
            setLaoding(false)
        }
    }

    async function blockUser(value) {
        props.loading(true)
        try {
            let body = { userId: value }
            const response = await apis.blockUser(body)
            fetchAllUsers('')
            setUserList([])
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function unBlockUser(value) {
        props.loading(true)
        try {
            let body = { userId: value }
            const response = await apis.unBlockUser(body)
            fetchAllUsers('')
            setUserList([])
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function handleSearch(e) {
        setSearchText(e)
        fetchAllUsers(e)
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            {/* {!props.isLogin && <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />} */}

            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='System Users' />}
            <View style={{ justifyContent: 'center', margin: 5 }}>
                <IconsInput
                    viewStyle={{ borderRadius: 50 }}
                    placeholder='Enter name'
                    onChangeText={(e) => handleSearch(e)}
                    value={searchText}
                    Icon={require('../../../assets/icons/search.png')}
                    InputStyle={Style.textInput} />
            </View>
            {users.length == 0 && <ActivityIndicator color={constants.LIGHT_BLUE} />}
            {users.length != 0 && laoding && <ActivityIndicator color={constants.LIGHT_BLUE} />}
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
                            <TouchableOpacity onPress={item.isBlocked ? () => unBlockUser(item._id) : () => blockUser(item._id)} style={[Style.option]}>
                                <Text style={[Style.option,
                                item.isBlocked ? { color: constants.RED } : { color: constants.GREEN }]}>{item.isBlocked ? 'Blocked' : 'Open'}</Text>
                            </TouchableOpacity>
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
