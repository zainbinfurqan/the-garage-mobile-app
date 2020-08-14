import React, { useState, useReducer } from 'react';
import { View, SafeAreaView, Text, ScrollView, FlatList } from 'react-native';
import Style from './style'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import constants from '../../config/constants';
import IconTextInput from '../../components/Input/IconsInput'


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
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1, borderWidth: 1, height: 250 }}>
                        </View>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export default PostsFeed