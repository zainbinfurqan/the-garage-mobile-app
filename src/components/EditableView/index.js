import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

import NativeDropDown from '../../components/NativeDropDown'
import CommonAction from '../../redux/common/action'
import constants from '../../config/constants';
import Button_ from '../../components/Button'
import helper from '../../utils/helpers'
import apis from '../../utils/apis';
import Style from './style'

function EditableView(props) {
    let postData = props.route.params.postData
    const [selectedCategoryValue, setSelectedCategoryValue] = useState("");

    useEffect(() => {
        setSelectedCategoryValue(postData.category._id)
    }, [])

    function categoryHandle(value) {
        setSelectedCategoryValue(value)
    }

    async function updateProduct() {
        props.loading(true)
        try {
            let body = {
                category: selectedCategoryValue,
                postId: postData._id,
                userId: postData.user._id
            }
            const response = await apis.updateuserProductByAdmin(body);
            console.log(response)
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={Style.container}>
            <TouchableOpacity onPress={() => props.navigation.pop()} style={Style.backMain}>
                <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/back.png')} />
            </TouchableOpacity>
            <View style={Style.images}>
                <View style={Style.image1}>
                    <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={{ uri: postData.picUrl[0] }} />
                </View>
                <View style={Style.image1}>
                    <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={{ uri: postData.picUrl[1] }} />
                </View>
                <View style={Style.image1}>
                    <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={{ uri: postData.picUrl[2] }} />
                </View>
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
                <Text style={Style.phone}>Phone No: {postData.user.phoneNo}</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={Style.instruction}>You can edit only category</Text>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={Style.cateogory}>Category</Text>
            </View>
            <NativeDropDown
                data={props.categories}
                selectedValue={selectedCategoryValue}
                setSelectedValue={(value) => categoryHandle(value)} />
            <Button_ onPress={updateProduct} title='Update' textStyle={{ color: 'white' }} rippleColor={constants.RIPPLE_COLOR} />

        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
    categories: store.common.categories
});

const mapDispatchToProps = {
    loading: CommonAction.loading,
    apiresponse: CommonAction.apiresponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableView);
