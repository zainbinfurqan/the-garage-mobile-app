import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

import NativeDropDown from '../../../components/NativeDropDown'
import CommonAction from '../../../redux/common/action'
import constants from '../../../config/constants';
import Button_ from '../../../components/Button'
import helper from '../../../utils/helpers'
import apis from '../../../utils/apis';
import Style from './style'
import { ScrollView } from 'react-native-gesture-handler';

function AdminEditableView(props) {
    let postData = props.postData
    const [selectedCategoryValue, setSelectedCategoryValue] = useState("");
    const [Guid, setGuid] = useState(1)

    const [selectedAutoPartsCategoryValue, setSelectedAutoPartsCategoryValue] = useState("");
    const [selectedSubAutoPartsCategoryValue, setSelectedSubAutoPartsCategoryValue] = useState("");

    const [AutoPartsCategories, setAutoPartsCategories] = useState([]);
    const [SubAutoPartsCategories, setSubAutoPartsCategories] = useState([]);

    useEffect(() => {
        if (postData.category.guid === 2) {
            setGuid(postData.category.guid)
            setSelectedCategoryValue(postData.category._id)
            postData.autoPartsCategory && setSelectedAutoPartsCategoryValue(postData.autoPartsCategory._id)
            postData.subAutoPartsCategory && setSelectedSubAutoPartsCategoryValue(postData.subAutoPartsCategory._id)
            getAutoPartCategory(postData.category._id)
            postData.category && postData.autoPartsCategory && getSubAutoPartCategory(postData.category._id, postData.autoPartsCategory._id)
        } else {
            setSelectedCategoryValue(postData.category._id)
        }
    }, [])

    function categoryHandle(value) {
        let a = props.categories.find(item => item._id === value)
        setGuid(a.guid)
        if (a.guid === 2) {
            setAutoPartsCategories([])
            setSubAutoPartsCategories([])
            setSelectedAutoPartsCategoryValue('')
            setSelectedSubAutoPartsCategoryValue('')
            getAutoPartCategory(value)

        }
        setSelectedCategoryValue(value)
    }

    function autoPartsCategoryHandle(value) {
        setSelectedSubAutoPartsCategoryValue('')
        getSubAutoPartCategory(selectedCategoryValue, value)
        setSelectedAutoPartsCategoryValue(value)
    }

    function subAutoPartsCategoryHandle(value) {
        setSelectedSubAutoPartsCategoryValue(value)
    }

    async function getAutoPartCategory(category) {
        props.loading(true)
        try {
            let params = { category }
            let response = await apis.fetchAutoPartsCategory(null, null, null, params)
            // console.log("getAutoPartCategory=>", response)
            setAutoPartsCategories(response)
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function getSubAutoPartCategory(category, autopartcategory) {
        // console.log(category, autopartcategory)
        props.loading(true)
        try {
            let params = { category: category, autoPartsCategory: autopartcategory }
            let response = await apis.fetchSubAutoPartsCategory(null, null, null, params)
            setSubAutoPartsCategories(response)
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function updateProduct() {
        props.loading(true)
        try {
            let body = {
                category: selectedCategoryValue,
                postId: postData._id,
                userId: postData.user._id,
                Guid
            }
            if (Guid == 2) {
                body.autoPartsCategory = selectedAutoPartsCategoryValue
                body.subAutoPartsCategory = selectedSubAutoPartsCategoryValue
            }
            const response = await apis.updateuserProductByAdmin(body, props.userData.token);
            props.loading(false)
            props.apiresponse({ flag: true, isError: false, isSuccess: true, message: 'Update Successfully' })
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                {/* <View style={Style.images}>
                    <View style={Style.image1}>
                        <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={{ uri: postData.picUrl[0] }} />
                    </View>
                    <View style={Style.image1}>
                        <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={{ uri: postData.picUrl[1] }} />
                    </View>
                    <View style={Style.image1}>
                        <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={{ uri: postData.picUrl[2] }} />
                    </View>
                </View> */}
                <View style={{ margin: 4, }}>
                    <Text style={Style.name}>Title: {postData.title}</Text>
                </View>
                <View style={{ margin: 4, }}>
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
                {Guid === 2 &&
                    AutoPartsCategories.length > 0 &&
                    <NativeDropDown
                        data={AutoPartsCategories}
                        selectedValue={selectedAutoPartsCategoryValue}
                        setSelectedValue={(value) => autoPartsCategoryHandle(value)} />
                }
                {Guid === 2 &&
                    SubAutoPartsCategories.length > 0 && <NativeDropDown
                        data={SubAutoPartsCategories}
                        selectedValue={selectedSubAutoPartsCategoryValue}
                        setSelectedValue={(value) => subAutoPartsCategoryHandle(value)} />
                }
                <Button_ onPress={updateProduct} title='Update' textStyle={{ color: 'white' }} rippleColor={constants.RIPPLE_COLOR} />
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditableView);
