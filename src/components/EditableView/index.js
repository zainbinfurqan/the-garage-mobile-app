import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { SafeAreaView, Text, View, Image } from 'react-native';

import NativeDropDown from '../../components/NativeDropDown'
import constants from '../../config/constants';
import helper from '../../utils/helpers'
import Style from './style'

function EditableView(props) {
    let postData = props.route.params.postData
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        setSelectedValue(postData.category.name)
    }, [])

    function categoryHandle(value) {
        setSelectedValue(value)
    }

    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.backMain}>
                <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/back.png')} />
            </View>
            <View style={Style.images}>
                <View style={Style.image1}></View>
                <View style={Style.image1}></View>
                <View style={Style.image1}></View>
            </View>
            <View style={Style.nameMain}>
                <Text style={Style.name}>Name: {helper.nameConcatenate(postData.user)}</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={Style.discription}>Discription: {postData.discription}</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={{
                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                    fontSize: constants.SMALL_FONT * 1.3
                }}>Price: {postData.priceRange}</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={Style.phone}>Phone No: {postData.contactNo}</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={Style.instruction}>You can edit only category</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={Style.cateogory}>Category</Text>
            </View>
            <NativeDropDown
                data={constants.CATEGORIES}
                selectedValue={selectedValue}
                setSelectedValue={(value) => categoryHandle(value)} />
        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableView);
