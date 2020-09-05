import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Dimensions, Modal, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// import ImageViewer from 'react-native-image-zoom-viewer';

import BeforLoginHeader from '../../components/BeforLoginHeader'
import ImagesCanas from '../../components/ImagesCanvas'
import CommonAction from '../../redux/common/action'
import ImageView from '../../components/ImageView'
import constants from '../../config/constants';
import helper from '../../utils/helpers';
import apis from '../../utils/apis';
import Style from './style'
const { width, height } = Dimensions.get('window')

function ProductDetailView(props) {
    const postData_ = props.route.params.postData;
    const [postData, setPostData] = useState({})
    const [showImageView, setShowImageView] = useState(false)
    const [imageViewUrl, setImageViewUrl] = useState('')
    const [images, setImages] = useState([])

    useEffect(() => {
        getPostDetail()
    }, [])

    function navigateToLogin() {
        props.apiresponse({ flag: true, isError: true, isSuccess: false, message: 'Please login first' })
    }

    async function getPostDetail() {
        props.loading(true)
        try {
            const params = { postId: postData_._id }
            const response = await apis.fetchPostDetail(null, null, null, params)
            setPostData(response[0])
            let images = [];
            response[0].picUrl.filter(items => images.push({ url: items }))
            setImages(images)
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
        props.loading(false)
    }

    async function goToChatHandle(otherUser) {
        props.loading(true)
        try {
            const body = {
                sender: props.userData._id,
                receiver: otherUser._id,
                postId: postData._id,
                sharedMessage: true
            };
            const response = await apis.createRoom(body);
            props.loading(false)
            props.navigation.navigate('Chat', { otherUser: otherUser, room: response });
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }


    async function fnIntrested() {
        try {
            if (props.isLogin) {
                if (postData.intrested.includes(props.userData._id)) {
                    const response = await apis.markUnIntrested(
                        {
                            userId: props.userData._id,
                            intrested: postData.intrested,
                            _id: postData._id,
                            name: helper.nameConcatenate(postData.user),
                            sendFrom: props.userData._id,
                            sendTo: postData.user._id,

                        })

                    if (response.message == "Successfull") {
                        props.navigation.pop()
                    }
                } else {
                    const response = await apis.markIntrested({
                        userId: props.userData._id,
                        _id: postData._id,
                        name: helper.nameConcatenate(postData.user),
                        sendFrom: props.userData._id,
                        sendTo: postData.user._id,
                    })
                    if (response.message == "Successfull") {
                        props.navigation.pop()
                    }
                }
            }
        } catch (error) {
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }



    function detailPostFotter() {
        return <>
            <TouchableOpacity onPress={props.isLogin ? fnIntrested : navigateToLogin}
                style={[{
                    borderWidth: 0.34,
                    borderColor: constants.LIGHT_BORDER,
                    flex: .45, padding: 5,
                    justifyContent: 'center'
                }, props.isLogin && postData.intrested.includes(props.userData._id) && { borderColor: constants.LIGHT_BLUE, backgroundColor: constants.LIGHT_BLUE }]}>
                <Text
                    style={[Style.intrested,
                    props.isLogin && postData.intrested.includes(props.userData._id)
                    && { color: 'white' }]}>{props.isLogin
                        && postData.intrested.includes(props.userData._id)
                        ? "Make Un-Intrested" : "Intrested?"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.isLogin ? () => goToChatHandle(postData.user) : navigateToLogin} style={{ borderWidth: 0.34, borderColor: constants.LIGHT_BORDER, flex: .45, padding: 5, justifyContent: 'center' }}>
                <Text style={Style.textMe} >Text Me</Text>
            </TouchableOpacity>
        </>
    }

    function showViewFotterBeforLogin() {
        return !props.isLogin && detailPostFotter()
    }

    function showViewFotter() {
        return props.isLogin && props.userData._id !== postData.user._id && detailPostFotter()
    }

    function openImageView(url) {
        setShowImageView(!showImageView)
        // setImageViewUrl(url)
    }

    function closeImageView() {
        setShowImageView(!showImageView)
    }

    return (
        <SafeAreaView style={Style.container}>
            {showImageView && <ImageView back={closeImageView} images={images} />}
            <ScrollView>
                {Object.keys(postData).length > 0 &&
                    <View style={{ borderColor: 'white', }}>
                        <TouchableOpacity onPress={() => props.navigation.pop()}>
                            <Image style={{ height: 30, width: 30, margin: 5 }} source={require('../../assets/icons/back.png')} />
                        </TouchableOpacity>
                        <ImagesCanas openImageView={openImageView} images={[
                            'https://www.gstatic.com/webp/gallery/2.jpg',
                            'https://www.gstatic.com/webp/gallery/4.jpg',
                            'https://www.gstatic.com/webp/gallery/5.jpg'
                        ]} />
                        <View style={{ margin: 10 }}>
                            <Text style={{
                                color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                fontSize: constants.SMALL_FONT * 1.2
                            }}>{helper.nameConcatenate(postData.user)}</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{
                                color: constants.GERY, fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                fontSize: constants.SMALL_FONT * 1.2
                            }}>{postData.discription}</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <View style={Style.categoryMain}>
                                <Text style={Style.categoryText}>{postData.category.name}</Text>
                            </View>
                            <View style={Style.line} />
                            <View style={{}}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/money.png')} />
                                    <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>{postData.priceRange}</Text>
                                </View>
                            </View>
                            <View style={Style.line} />
                            <View style={{}}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/mobile.png')} />
                                    <Text style={{ color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT }}>{postData.user.phoneNo}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={Style.line} />
                        <View style={[{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            margin: 10
                        },]}>
                            {showViewFotter()}
                            {showViewFotterBeforLogin()}
                        </View>
                    </View>}
            </ScrollView>
        </SafeAreaView >
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    loading: CommonAction.loading,
    apiresponse: CommonAction.apiresponse
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
