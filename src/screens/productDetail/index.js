import React, { } from 'react';
import { View, SafeAreaView, Dimensions, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Style from './style'
import constants from '../../config/constants';
const { width, height } = Dimensions.get('window')

function ProductDetailView(props) {
    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <View style={{ borderWidth: 1, borderColor: 'white', }}>
                    <Image style={{ height: 30, width: 30, margin: 5 }} source={require('../../assets/icons/back.png')} />
                    <View style={{ borderWidth: 1, borderColor: 'black', height: 100, margin: 10 }}></View>
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/discription.png')} />
                            <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>Description</Text>
                        </View>
                        <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus
                         PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={Style.categoryMain}>
                            <Text style={Style.categoryText}>Category</Text>
                        </View>
                        <View style={Style.line} />
                        <View style={{}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/money.png')} />
                                <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>1000</Text>
                            </View>
                        </View>
                        <View style={Style.line} />
                        <View style={{}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/mobile.png')} />
                                <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>03022408099</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Style.line} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 0.34, borderColor: constants.LIGHT_BORDER, flex: .45, padding: 5, justifyContent: 'center' }}>
                            <Text style={{
                                fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                alignSelf: 'center',
                                fontSize: constants.SMALL_FONT
                            }}>Intrested?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 0.34, borderColor: constants.LIGHT_BORDER, flex: .45, padding: 5, justifyContent: 'center' }}>
                            <Text style={{
                                fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                alignSelf: 'center',
                                fontSize: constants.SMALL_FONT
                            }} >Text Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetailView;
