import React, { useState, useReducer } from 'react';
import { View, SafeAreaView, Text, ScrollView, FlatList, Image } from 'react-native';
import Style from './style'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import constants from '../../config/constants';
import IconTextInput from '../../components/Input/IconsInput'
import Button_ from '../../components/Button'

const initialState = {
    lowPrice: 0,
    highPrice: 1000
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_PRICE_CHANGE':
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
                [label]: value.trim(),
            },
        });
    }

    return (
        <SafeAreaView style={Style.container}>
            <BeforLoginHeader />
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
                <Text style={Style.priceRangText}>Price Range</Text>
                <View style={{ flexDirection: 'row', }}>
                    <View style={Style.priceLow}>
                        <IconTextInput InputStyle={{}} value={state.lowPrice} onChangeText={(e) => PriceRange(e, 'lowPrice')} />
                    </View>
                    <View style={Style.priceHigh}>
                        <IconTextInput InputStyle={{}} value={state.highPrice} onChangeText={(e) => PriceRange(e, 'highPrice')} />
                    </View>
                </View>
            </View>
            <View style={Style.postListMain}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => (
                        <View style={Style.postMain}>
                            <View style={Style.postHeaderMain}>
                                <View style={Style.profileMain}>
                                    <View style={Style.profile}>
                                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../../assets/icons/default-profile.png')} />
                                    </View>
                                </View>
                                <View style={{ flex: .6 }}>
                                    <Text style={Style.name}>Jone kane</Text>
                                </View>
                                <View style={{ flex: .3 }}></View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Image style={{ alignSelf: 'center', height: 170 }} source={require('../../assets/images/default-post.png')} />
                            </View>
                            <View style={Style.footerMain}>
                                <View style={{ flexDirection: 'row', marginLeft: 10, padding: 5, flex: .7, alignSelf: 'center' }}>
                                    {constants.INTRESTES_LIST.slice(0, 3).map((item, index) => {
                                        return (
                                            <View style={[{
                                                borderWidth: 0.34,
                                                borderRadius: 50,
                                                height: 25, width: 25,
                                                justifyContent: 'center'
                                            }, index > 0 && { marginLeft: -10 }]}>
                                                <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/default-profile.png')} />
                                            </View>
                                        )
                                    })}
                                    <View style={{
                                        justifyContent: 'center', paddingLeft: 10, flexDirection: 'row',
                                    }}><Text style={Style.intrestedText1}>{constants.INTRESTES_LIST.length}</Text>
                                        <Text style={Style.intrestedText2}> people are intrested</Text></View>
                                </View>
                                <View style={Style.footer1}>
                                    <Button_
                                        title='intrested?'
                                        rippleColor={constants.LIGHT_BORDER}
                                        textStyle={{
                                            color: constants.LIGHT_BLUE
                                        }}
                                        buttonStyle={{
                                            height: 30,
                                            backgroundColor: constants.LINE_COLOR
                                        }} />
                                </View>
                            </View>
                        </View>
                    )}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export default PostsFeed