import React, { useState, useReducer } from 'react';
import { View, SafeAreaView, Text, ScrollView, FlatList, Image, TouchableOpacity, } from 'react-native';
import Slider from '@react-native-community/slider'
import IconsInput from '../../components/Input/IconsInput'
import Style from './style'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import constants from '../../config/constants';
import IconTextInput from '../../components/Input/IconsInput'
import moment from 'moment'

const initialState = {
    lowPrice: 0,
    highPrice: 1000,
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

    const [category, setCategory] = useState(constants.CATEGORIES)
    const [posts, setPosts] = useState(constants.POST_DUMMAY)
    const [state, dispatch] = useReducer(reducer, initialState)

    function PriceRange(value, label) {
        dispatch({
            type: 'ON_PRICE_CHANGE',
            payload: {
                [label]: Math.floor(value),
            },
        });
    }

    function handleChangeText(value, label) {
        dispatch({
            type: 'ON_TEXT_CHANGE',
            payload: {
                [label]: value.trim(),
            },
        });
    }

    return (
        <SafeAreaView style={Style.container}>
            <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <IconsInput
                        placeholder='Email'
                        onChangeText={(e) => handleChangeText(e, 'searchText')}
                        value={state.searchText}
                        Icon={require('../../assets/icons/search.png')}
                        InputStyle={Style.textInput} />
                </View>
            </View>
            <View style={Style.line} />
            <View style={{}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={Style.categoryScroll}>
                    {category.map((item, index) => {
                        return (
                            <View key={index} style={Style.categoryMain}>
                                <Text style={Style.categoryText}>{item.title}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={Style.line} />
            <View style={Style.priceRangMain}>
                <Text style={Style.priceRangText}>Price range:  {state.priceRange}</Text>
                <Slider minimumValue={10} maximumValue={100}
                    onValueChange={(e) => PriceRange(e, "priceRange")}
                    value={0}
                    minimumTrackTintColor='green'
                    maximumTrackTintColor='red'
                >
                </Slider>
            </View>
            {/* <View style={}>
                <Text style={Style.priceRangText}>Price Range</Text>
                <View style={{ flexDirection: 'row', }}>
                    <View style={Style.priceLow}>
                        <IconTextInput InputStyle={{}} value={state.lowPrice} onChangeText={(e) => PriceRange(e, 'lowPrice')} />
                    </View>
                    <View style={Style.priceHigh}>
                        <IconTextInput InputStyle={{}} value={state.highPrice} onChangeText={(e) => PriceRange(e, 'highPrice')} />
                    </View>
                </View>
            </View> */}
            <View style={Style.postListMain}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => (
                        <View style={Style.postMain}>
                            <View style={Style.postHeaderMain}>
                                <View style={Style.profileMain}>
                                    <View style={Style.profile}>
                                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../../assets/images/default-profile-1.png')} />
                                    </View>
                                </View>
                                <View style={{ flex: .6 }}>
                                    <Text style={Style.name}>Jone kane</Text>
                                </View>
                                <View style={{ flex: .3, justifyContent: "center", }}><Text style={{
                                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                    fontSize: constants.SMALL_FONT,
                                    alignSelf: "flex-end"
                                }}>{moment(new Date()).format('ddd MMM YYYY')}</Text></View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Image style={{ alignSelf: 'center', height: 170 }} source={require('../../assets/images/default-post.png')} />
                            </View>
                            <View style={[Style.footerMain, {}]}>
                                <View style={Style.footer1left}>
                                    {constants.INTRESTES_LIST.slice(0, 3).map((item, index) => {
                                        return (
                                            <View key={index} style={[Style.intrestedPeopleMain, index > 0 && { marginLeft: -10 }]}>
                                                <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/images/default-profile-1.png')} />
                                            </View>
                                        )
                                    })}
                                    <View style={[Style.intrestedPeopleMain, { marginLeft: -10 }]}>
                                        <Image style={{ height: 25, opacity: 0.5, width: 25, alignSelf: 'center', position: 'absolute' }} source={require('../../assets/images/default-profile-1.png')} />
                                        <Image style={{ height: 10, width: 10, alignSelf: 'center' }} source={require('../../assets/icons/add-black.png')} />
                                    </View>
                                    <View style={Style.intrestedPeopleNumber}>
                                        <Text style={Style.intrestedText1}>{constants.INTRESTES_LIST.length}</Text>
                                        <Text style={Style.intrestedText2}> people are intrested</Text></View>
                                </View>
                                <View style={[Style.footer1]}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetailView')}>
                                        <Text style={Style.intrestedText2}>View details </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        </SafeAreaView >
    )
}

export default PostsFeed