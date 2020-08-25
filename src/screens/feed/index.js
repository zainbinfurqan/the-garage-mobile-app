import React, { useState, useReducer, useEffect } from 'react';
import { View, SafeAreaView, Text, ScrollView, RefreshControl, FlatList, Image, ActivityIndicator, TouchableOpacity, } from 'react-native';
import Slider from '@react-native-community/slider'
import { connect } from 'react-redux'

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
        fetchPost('', 10, 10)
    }, [refreshing]);

    useEffect(() => {
        fetchPost(selectedCategory, state.lowPrice, state.highPrice)
        // fetchCategory()
        // props.apiresponse(true)
        // props.logout(null)
    }, [])

    async function fetchPost(category, lowPrice, highPrice) {
        setLoading(true)
        try {
            let params = {
                category: category,
                priceLessThen: lowPrice,
                priceGraterThen: highPrice,
            };
            const response = await api.searchPost(null, null, null, params)
            setPosts(response)
            setLoading(false)
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
        dispatch({
            type: 'ON_TEXT_CHANGE',
            payload: {
                [label]: value.trim(),
            },
        });
    }

    function selectCategory(item, index) {
        setSelectedCategory(item._id)
        setTimeout(() => {
            fetchPost(item._id, state.lowPrice, state.highPrice)
        }, 1000);

    }

    return (
        <SafeAreaView style={Style.container}>
            {!props.isLogin && <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />}
            {props.isLogin && <AfterLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />}
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5
            }}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <IconsInput
                        viewStyle={{ borderRadius: 50 }}
                        placeholder='Enter name'
                        onChangeText={(e) => handleChangeText(e, 'searchText')}
                        value={state.searchText}
                        Icon={require('../../assets/icons/search.png')}
                        InputStyle={Style.textInput} />
                </View>
            </View>
            <View style={Style.line} />
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
            <View style={Style.line} />
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
                {!loading && <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    data={posts}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetailView', { postData: item })} style={Style.postMain}>
                            <View style={Style.left}>
                                <Image style={Style.post} source={require('../../assets/images/default-post.png')} />
                            </View>
                            <View style={{
                                flexDirection: "column", flex: .7, padding: 5,
                            }}>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <Text style={Style.name}>{helper.nameConcatenate(item.user)}</Text>
                                    <Text style={Style.price}>${item.priceRange}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={Style.discription}>{item.discription.substring(1, 100)}...</Text>
                                </View>
                                <View style={{}}>
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
                            {/* <View style={Style.postHeaderMain}>
                                <View style={Style.profileMain}>
                                    <View style={Style.profile}>
                                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../../assets/images/default-profile-1.png')} />
                                    </View>
                                </View>
                                <View style={{ flex: .60 }}>
                                    <Text style={Style.name}>{helper.nameConcatenate(item.user)}</Text>
                                </View>
                                <View style={{ flex: .40, justifyContent: "center", }}><Text style={{
                                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                    fontSize: constants.SMALL_FONT,
                                    alignSelf: "flex-end"
                                }}>{moment(item.createdAt).format('ddd MMM YYYY hh:mm a')}</Text></View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Image style={{ alignSelf: 'center', height: 170 }} source={require('../../assets/images/default-post.png')} />
                            </View>
                            <View style={{ flexDirection: 'row', margin: 5, }}>
                                <View style={{ flex: .7, }}><Text style={{
                                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                    fontSize: constants.SMALL_FONT,
                                    paddingLeft: 10
                                }}>Category: {item.category.name}</Text></View>
                                <View style={{ flex: .3, paddingRight: 5 }}><Text style={{
                                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                    alignSelf: 'flex-end',
                                    fontSize: constants.SMALL_FONT
                                }}>Price: {item.priceRange}</Text></View>
                            </View>
                            <View style={[Style.footerMain, {}]}>
                                <View style={Style.footer1left}>
                                    {item.intrested.length == 0 && <View style={[Style.intrestedPeopleMain, { marginLeft: -10, }]}>
                                        <Image style={{ height: 25, opacity: 0.5, width: 25, alignSelf: 'center', position: 'absolute' }} source={require('../../assets/images/default-profile-1.png')} />
                                        <Image style={{ height: 10, width: 10, alignSelf: 'center' }} source={require('../../assets/icons/add-black.png')} />
                                    </View>}
                                    {item.intrested.slice(0, 3).map((item, index) => {
                                        return (
                                            <View key={index} style={[Style.intrestedPeopleMain, index > 0 && { marginLeft: -10 }]}>
                                                <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/images/default-profile-1.png')} />
                                            </View>
                                        )
                                    })}

                                    <View style={Style.intrestedPeopleNumber}>
                                        <Text style={Style.intrestedText1}>{item.intrested.length}</Text>
                                        <Text style={Style.intrestedText2}> people are intrested</Text></View>
                                </View>
                                <View style={[Style.footer1]}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetailView', { postData: item })}>
                                        <Text style={Style.intrestedText2}>View details </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         */}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsFeed);
