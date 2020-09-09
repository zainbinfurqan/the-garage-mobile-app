import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import CommonAction from '../../../redux/common/action'
import constants from '../../../config/constants'
import NativeDropDown from '../../NativeDropDown'
import TextInput_ from '../../Input/TextInput'
import Button_ from '../../Button'
import Style from './style'
import apis from '../../../utils/apis';

function FullEditableView(props) {
    let postData = props.postData

    const [error, setError] = useState({})
    const [Guid, setGuid] = useState(1)
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [title, setTitile] = useState('')
    const [category, setCategory] = useState('')
    const [selectedCategoryValue, setSelectedCategoryValue] = useState("");
    const [selectedAutoPartsCategoryValue, setSelectedAutoPartsCategoryValue] = useState("");
    const [selectedSubAutoPartsCategoryValue, setSelectedSubAutoPartsCategoryValue] = useState("");
    const [AutoPartsCategories, setAutoPartsCategories] = useState([]);
    const [SubAutoPartsCategories, setSubAutoPartsCategories] = useState([]);

    useEffect(() => {
        setDiscription(postData.discription)
        setGuid(postData.category.guid)
        setPrice(postData.priceRange)
        if (postData.category.guid === 2) {
            setGuid(postData.category.guid)
            setSelectedAutoPartsCategoryValue(postData.autoPartsCategory._id)
            setSelectedSubAutoPartsCategoryValue(postData.subAutoPartsCategory._id)
            getAutoPartCategory(postData.category._id)
            getSubAutoPartCategory(postData.category._id, postData.autoPartsCategory._id)
        }
        setSelectedCategoryValue(postData.category._id)
        setTitile(postData.title)
    }, [])


    // start selec handles 
    function categoryHandle(value) {
        let a = props.categories.find(item => item._id === value)
        setGuid(a.guid)
        if (a.guid === 2) {
            getAutoPartCategory(value)
        }
        setSelectedCategoryValue(value)
    }

    function autoPartsCategoryHandle(value) {
        setSelectedSubAutoPartsCategoryValue('')
        // setSubAutoPartsCategories([])
        getSubAutoPartCategory(selectedCategoryValue, value)
        setSelectedAutoPartsCategoryValue(value)
        // setSelectedCategoryValue(value)
    }

    function subAutoPartsCategoryHandle(value) {
        setSelectedSubAutoPartsCategoryValue(value)
    }
    //end select handels

    async function updateProduct() {
        props.loading(true)
        try {
            let body = {
                priceRange: price,
                category: selectedCategoryValue,
                discription: discription,
                postId: postData._id,
                userId: postData.user._id,
                Guid
            }
            if (Guid == 2) {
                body.autoPartsCategory = selectedAutoPartsCategoryValue
                body.subAutoPartsCategory = selectedSubAutoPartsCategoryValue
            }
            // console.log(body)
            const response = await apis.updateProductApi(body, props.userData.token)
            props.apiresponse({ flag: true, isError: false, isSuccess: true, message: 'Update Successfully' })
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function getAutoPartCategory(category) {
        try {
            let params = { category }
            let response = await apis.fetchAutoPartsCategory(null, null, null, params)
            // console.log("getAutoPartCategory=>", response)
            setAutoPartsCategories(response)
        } catch (error) {
        }
    }

    async function getSubAutoPartCategory(category, autopartcategory) {
        // console.log(category, autopartcategory)
        try {
            let params = { category: category, autoPartsCategory: autopartcategory }
            let response = await apis.fetchSubAutoPartsCategory(null, null, null, params)
            // console.log("getSubAutoPartCategory=>", response)
            setSubAutoPartsCategories(response)
        } catch (error) {
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{}}>
                <TextInput_
                    placeholder='title'
                    onChangeText={(e) => setTitile(e)}
                    InputStyle={Style.textInput}
                    value={title}
                />
                <TextInput_
                    placeholder='discription'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(e) => setDiscription(e)}
                    InputStyle={Style.textInputArea}
                    value={discription}
                />
                <TextInput_
                    placeholder='price'
                    onChangeText={(e) => setPrice(e)}
                    InputStyle={Style.textInput}
                    value={price.toString()}
                />
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
    loading: CommonAction.loading,
    apiresponse: CommonAction.apiresponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullEditableView);
