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
    console.log("postData=>", postData.category)

    const [error, setError] = useState({})
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [selectedCategoryValue, setSelectedCategoryValue] = useState("");

    useEffect(() => {
        setDiscription(postData.discription)
        setPrice(postData.priceRange)
        setSelectedCategoryValue(postData.category._id)
    }, [])

    function categoryHandle(value) {
        setSelectedCategoryValue(value)
    }

    async function updateProduct() {
        props.loading(true)
        try {
            let body = {
                priceRange: price,
                category: selectedCategoryValue,
                discription: discription,
                postId: postData._id,
                userId: postData.user._id
            }
            const response = await apis.updateProductApi(body, props.userData.token)
            props.apiresponse({ flag: true, isError: false, isSuccess: true, message: 'Update Successfully' })
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{}}>
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
                <Button_ onPress={updateProduct} title='Update' textStyle={{ color: 'white' }} rippleColor={constants.RIPPLE_COLOR} />
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(FullEditableView);
