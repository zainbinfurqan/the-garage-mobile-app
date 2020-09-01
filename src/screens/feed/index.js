import React, { useState, useReducer, useEffect } from 'react';
import { View, SafeAreaView, Text, ScrollView, RefreshControl, FlatList, Image, ActivityIndicator, TouchableOpacity, } from 'react-native';
import Slider from '@react-native-community/slider'
import { connect } from 'react-redux'
import { useRoute } from '@react-navigation/native';
import io from 'socket.io-client';

import BeforLoginHeader from '../../components/BeforLoginHeader'
import AfterLoginHeader from '../../components/AfterLoginHeader'
import IconTextInput from '../../components/Input/IconsInput'
import IconsInput from '../../components/Input/IconsInput'
import NoDataFound from '../../components/NoDataFound'
import CommonAction from '../../redux/common/action'
import AuthActions from '../../redux/auth/action'
import constants from '../../config/constants';
import api from '../../utils/apis'
import Style from './style'
import moment from 'moment'
import helper from '../../utils/helpers';
import style from './style';

const socket = io(constants.SOCKET_IO_URL, { forceNew: true });
const initialState = {
    lowPrice: 10,
    highPrice: 10,
    priceRange: 0,
    searchText: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_PRICE_CHANGE':
            return { ...state, ...action.payload };
        case 'ON_TEXT_CHANGE':
            return { ...state, ...action.payload };
        case 'ON_ERROR':
            return { ...state, errors: action.payload };
        default:
            return state;
    }
}
function PostsFeed(props) {



    const [state, dispatch] = useReducer(reducer, initialState)
    const [category, setCategory] = useState([])
    const [posts, setPosts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');

    const onRefresh = React.useCallback(() => {
        dispatch({
            type: 'ON_PRICE_CHANGE',
            payload: {
                ['lowPrice']: Math.floor(10),
            },
        });
        dispatch({
            type: 'ON_PRICE_CHANGE',
            payload: {
                ['highPrice']: Math.floor(10),
            },
        });
        setSelectedCategory('')
        setSearchText('')
        fetchPost('', 10, 10, '')
    }, [refreshing]);

    useEffect(() => {
        fetchPost(selectedCategory, state.lowPrice, state.highPrice, searchText)
        // fetchCategory()
        setupListener()
        props.isLogin && props.fetchUnReadLocalNotification({
            user: props.userData._id
        }, props.userData.token)
        // props.loading(false)
        // props.apiresponse(true)
        // props.logout(null)
    }, [])

    function setupListener() {
        socket.on("app-local-notification", (socketData) => {
            let params = {
                user: props.userData._id
            }
            props.fetchUnReadLocalNotification(params)
        })
    }

    async function fetchPost(category, lowPrice, highPrice, searchText) {
        setLoading(true)
        try {
            let params = {
                category: category,
                // priceLessThen: lowPrice,
                // priceGraterThen: highPrice,
                name: searchText
            };
            const response = await api.searchPost(null, null, null, params)
            setPosts(response)
            setLoading(false)
            setRefreshing(false)
        } catch (error) {
            setLoading(false)
        }
    }

    function PriceRange(value, label) {
        dispatch({
            type: 'ON_PRICE_CHANGE',
            payload: {
                [label]: Math.floor(value),
            },
        });
        setTimeout(() => {
            fetchPost(selectedCategory, state.lowPrice, Math.floor(value))
        }, 1000);
    }

    function handleChangeText(value, label) {
        setSearchText(value)
        // dispatch({
        //     type: 'ON_TEXT_CHANGE',
        //     payload: {
        //         [label]: value.trim(),
        //     },
        // });
    }

    function selectCategory(item, index) {
        setSelectedCategory(item._id)
        setTimeout(() => {
            fetchPost(item._id, state.lowPrice, state.highPrice, searchText)
        }, 1000);
    }

    function totalFilter() {
        let number = 0
        if (searchText !== '' && selectedCategory !== '') {
            number = 2
        }
        if (searchText !== '' && selectedCategory === '') {
            number = 1
        }
        if (searchText === '' && selectedCategory !== '') {
            number = 1
        }
        return number
    }

    function searchHandle() {
        fetchPost(selectedCategory, state.lowPrice, state.highPrice, searchText)
    }



    return (
        <SafeAreaView style={Style.container}>
            {!props.isLogin && <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />}
            {props.isLogin && <AfterLoginHeader notificationIcon={true} menuButton={true} backButton={false} headerText='Post Feed' />}
            <View style={Style.searchTextMain}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <IconsInput
                        viewStyle={{ borderRadius: 50 }}
                        placeholder='Enter name'
                        onPress={searchHandle}
                        onChangeText={(e) => handleChangeText(e, 'searchText')}
                        value={searchText}
                        Icon={require('../../assets/icons/search.png')}
                        InputStyle={Style.textInput} />
                </View>
            </View>
            {/* <View style={Style.line} /> */}
            <View style={{}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={Style.categoryScroll}>
                    {props.categories.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => selectCategory(item, index)} key={index}
                                style={[Style.categoryMain, selectedCategory == item._id && { backgroundColor: constants.LIGHT_BLUE }]}>
                                <Text style={[Style.categoryText, selectedCategory == item._id && { color: 'white' }]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            {/* <View style={Style.priceRangMain}>
                <Text style={Style.priceRangText}>Price range:  {state.highPrice}</Text>
                <Slider minimumValue={state.lowPrice} maximumValue={1000}
                    onValueChange={(e) => PriceRange(e, "highPrice")}
                    value={state.highPrice}
                    minimumTrackTintColor='green'
                    maximumTrackTintColor='red'
                >
                </Slider>
            </View> */}
            <View style={[Style.postListMain, {}]}>
                {totalFilter() > 0 &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={onRefresh} style={Style.filterMain}>
                            <View style={Style.filterNumberName}>
                                <Text style={Style.filterNumber}>{totalFilter()}</Text>
                            </View>
                            <Text style={Style.filterText}>Clear Filters</Text>
                        </TouchableOpacity>
                        {/* <View style={Style.clearFilterMain}>
                            <Text style={Style.filterText}>Clear Filter</Text>
                        </View> */}
                    </View>}

                {!loading && <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    data={posts}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetailView', { postData: item })} style={Style.postMain}>
                            <View style={Style.left}>
                                <Image style={Style.post} source={{ uri: item.picUrl[0] }} />
                            </View>
                            {/* {console.log("item=>", item)} */}
                            <View style={{
                                flexDirection: "column", flex: .7, padding: 5,
                            }}>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <Text style={Style.name}>{helper.nameConcatenate(item.user)}  {props.isLogin && props.userData._id === item.user._id && '(Your)'}</Text>
                                    <Text style={Style.price}>${item.priceRange}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Style.discription}>{item.discription.substring(1, 100)}...</Text>
                                </View>
                                <View style={{}}>
                                    {/* {console.log("item.category=>", item)} */}
                                    <Text style={Style.category}>o {item.category.name}</Text>
                                </View>
                                <View style={[Style.footerMain, {}]}>
                                    <View style={Style.footer1left}>
                                        {item.intrested.length == 0 && <View style={[Style.intrestedPeopleMain, {}]}>
                                            <Image style={{ height: 25, opacity: 0.5, width: 25, alignSelf: 'center', position: 'absolute' }} source={require('../../assets/images/default-profile-1.png')} />
                                            <Image style={{ height: 10, width: 10, alignSelf: 'center' }} source={require('../../assets/icons/add-black.png')} />
                                        </View>}
                                        {item.intrested.slice(0, 3).map((item, index) => {
                                            return (
                                                <View key={index} style={[Style.intrestedPeopleMain, index > 0 && {}]}>
                                                    <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/images/default-profile-1.png')} />
                                                </View>
                                            )
                                        })}

                                        <View style={Style.intrestedPeopleNumber}>
                                            <Text style={Style.intrestedText1}>{item.intrested.length}</Text>
                                            <Text style={Style.intrestedText2}> people are intrested</Text></View>
                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />}
                {loading && <ActivityIndicator color={constants.LIGHT_BLUE} />}
                {posts.length == 0 && !loading && <NoDataFound />}
            </View>
        </SafeAreaView >
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
    categories: store.common.categories
});

const mapDispatchToProps = {
    logout: AuthActions.logout,
    apiresponse: CommonAction.apiresponse,
    loading: CommonAction.loading,
    fetchUnReadLocalNotification: CommonAction.fetchUnReadLocalNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsFeed);
