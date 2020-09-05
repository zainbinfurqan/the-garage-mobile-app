import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux'
import io from 'socket.io-client';
import RNFetchBlob from 'rn-fetch-blob';

import AfterLoginHeader from '../../components/AfterLoginHeader';
import NativeDropDown from '../../components/NativeDropDown'
import TextInput_ from '../../components/Input/TextInput'
import SelectPanel from '../../components/SelectOptions'
import CommonAction from '../../redux/common/action'
import constants from '../../config/constants';
import Button_ from '../../components/Button'
import api from '../../utils/apis'
const socket = io(constants.SOCKET_IO_URL, { forceNew: true });

import Style from './style'
const initialState = {
    name: '',
    discription: '',
    picUrl: '',
    category: '',
    price: 0,
    title: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_CHANGE_TEXT':
            return { ...state, ...action.payload };
        case 'ON_ERROR':
            return { ...state, errors: action.payload };
        default:
            return state;
    }
}

function Uploadproduct(props) {
    const options = {
        mediaType: 'image',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState)
    const [selectedValue, setSelectedValue] = useState(props.categories[0]._id);
    const [openSelect, setOpenSelect] = useState(false)
    const [images, setImages] = useState([])
    const [autoPartsCategory, setAutoPartsCategory] = useState([])
    const [subAutoPartsCategory, setSubAutoPartsCategory] = useState([])
    const [selectedAutoPartCategory, setSelectedAutoPartCategory] = useState('');
    const [selectedSubAutoPartCategory, setSelectedSubAutoPartCategory] = useState('');
    const [error, setError] = useState('');



    function handleChangeText(value, label) {
        if (label == 'title') {
            dispatch({
                type: 'ON_CHANGE_TEXT',
                payload: {
                    [label]: value
                },
            });
        }
        if (label == 'discription') {
            dispatch({
                type: 'ON_CHANGE_TEXT',
                payload: {
                    [label]: value
                },
            });
        }
        if (label == 'price') {
            dispatch({
                type: 'ON_CHANGE_TEXT',
                payload: {
                    [label]: value.trim(),
                },
            });
        }

    }

    function onItmPress(item) {
        setOpenSelect(!openSelect)
        if (item == 'Take from camera') {
            ImagePicker.launchCamera(options, (response) => {
                if (response.uri) {
                    let data = {
                        // filename: response.fileName,
                        filename: response.fileName,
                        path: response.path,
                        type: response.type,
                        uri: response.uri,
                        // data: response.path,
                        // uri: `file://${response.path}`
                    }
                    if (images.length !== 5) {
                        images.push(data)
                        setImages(images)
                    }
                    // images.push(data)
                    // setImages(images)
                }
            });
        }
        if (item == 'Open gallery') {
            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.uri) {
                    let data = {
                        // name: response.fileName,
                        filename: response.fileName,
                        path: response.path,
                        type: response.type,
                        uri: response.uri,
                        // data: response.path,
                        // uri: `file://${response.path}`
                    }
                    if (images.length !== 5) {
                        images.push(data)
                        setImages(images)

                    }
                    // images.push(data)
                }
            });
        }
    }

    function openSelectPanel() {
        images.length < 5 ? setOpenSelect(true) : setError('you cannot upload more then 5 images')
    }

    async function uploadPost() {
        props.loading(true)
        try {
            let body = {
                data: {
                    discription: state.discription,
                    priceRange: state.price,
                    user: props.userData._id,
                    category: selectedValue,
                    sendTo: props.userData._id,
                    isApproved: props.userData.role.includes('admin') ? true : false,
                    isAdmin: props.userData.role.includes('admin') ? true : false,
                },
                images: images
                // discription: state.discription,
                // priceRange: state.price,
                // user: props.userData._id,
                // category: selectedValue,
                // sendTo: props.userData._id,
                // isApproved: props.userData.role.includes('admin') ? true : false,
                // isAdmin: props.userData.role.includes('admin') ? true : false,
                // picUrl: images
            }
            if (selectedValue !== '5f3a88e08b37cd378868643c' && selectedValue !== '5f3a89188b37cd378868643e') {
                body.data.autoPartsCategory = selectedAutoPartCategory
                body.data.subAutoPartsCategory = selectedSubAutoPartCategory
            }
            const response = await api.createPost(body, props.userData.token);
            socket.emit('local-notification', { to: props.userData._id });
            socket.emit('local-notification', { to: response.notificationTo });

            props.loading(false)
            // props.navigation.pop()
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function uploadImage(data) {
        props.loading(true)
        try {
            let formData = new FormData();
            formData.append('file', data);
            formData.append('upload_preset', 'vfds5it9')
            fetch('https://api.cloudinary.com/v1_1/zainahmed/image/upload', {
                method: 'post',
                body: formData,
            })
                .then(res => res.json())
                .then(response => {
                    images.push(response.secure_url)
                    setImages(images)
                    props.loading(false)
                })
        } catch (err) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: err })
        }
    }

    async function getAutoPartCategory(category) {
        try {
            let params = { category }
            let response = await api.fetchAutoPartsCategory(null, null, null, params)
            console.log("response auto part=>", response)
            setAutoPartsCategory(response)
        } catch (error) {
        }
    }

    async function getSubAutoPartCategory(autopartcategory) {
        try {
            let params = { category: selectedValue, autoPartsCategory: autopartcategory }
            let response = await api.fetchSubAutoPartsCategory(null, null, null, params)
            console.log("response sub auto part=>", response)
            setSubAutoPartsCategory(response)
        } catch (error) {
        }
    }

    async function selectCategoryHandle(value) {
        setSelectedValue(value)
        setAutoPartsCategory([]);
        setSelectedAutoPartCategory('')
        setSelectedSubAutoPartCategory('')
        setSubAutoPartsCategory([])
        getAutoPartCategory(value)
    }

    async function selectAutoPartCategoryHandle(value) {
        setSelectedAutoPartCategory(value)
        setSubAutoPartsCategory([])
        setSelectedSubAutoPartCategory('')
        await getSubAutoPartCategory(value)
    }

    async function selectSubAutoPartCategory(value) {
        setSelectedSubAutoPartCategory(value)
    }

    return (
        <>
            {openSelect && <SelectPanel open={openSelect}
                selectitem={onItmPress}
                data={[{ title: 'Open gallery' }, { title: 'Take from camera' }, { title: 'Cancle' }]} />}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 1 }}>
                    <AfterLoginHeader menuButton={false} backButton={true} />
                    {/* <View style={{ flexDirection: 'column' }}>
                        <View style={{}}>
                            {images.length == 0 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length > 0 && <TouchableOpacity style={[Style.uploadMain,]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[0] }} />
                            </TouchableOpacity>}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {images.length >= 0 && images.length <= 1 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length >= 2 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[1] }} />
                            </TouchableOpacity>}
                            {images.length >= 0 && images.length <= 2 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length == 3 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[2] }} />
                            </TouchableOpacity>}

                        </View>
                    </View> */}
                    {/* <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain]}>
                        <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                        <Text style={Style.uploadText}>Upload picture</Text>
                    </TouchableOpacity> */}
                    {/* </>
                    </ScrollView> */}
                    <View style={{ margin: 10 }}>
                        <TextInput_
                            placeholder='Title'
                            multiline={false}
                            numberOfLines={1}
                            onChangeText={(e) => handleChangeText(e, 'title')}
                            InputStyle={Style.textInputArea}
                            value={state.title}
                        />
                        <TextInput_
                            placeholder='discription'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(e) => handleChangeText(e, 'discription')}
                            InputStyle={Style.textInputArea}
                            value={state.discription}
                        />
                        <TextInput_
                            placeholder='price'
                            onChangeText={(e) => handleChangeText(e, 'price')}
                            InputStyle={Style.textInput}
                            value={state.price}
                        />
                        <NativeDropDown data={props.categories} selectedValue={selectedValue} setSelectedValue={(value) => selectCategoryHandle(value)} />
                        {autoPartsCategory.length > 0 && <NativeDropDown data={autoPartsCategory} selectedValue={selectedAutoPartCategory} setSelectedValue={(value) => selectAutoPartCategoryHandle(value)} />}
                        {subAutoPartsCategory.length > 0 && <NativeDropDown data={subAutoPartsCategory} selectedValue={selectedSubAutoPartCategory} setSelectedValue={(value) => selectSubAutoPartCategory(value)} />}
                        <View style={Style.uploadMain}>
                            <View style={{ flexDirection: 'row' }}>
                                {images.length > 0 && images.map((_, i) => {
                                    console.log(_)
                                    return (
                                        <View style={{ borderRadius: 5, height: 90, flex: 0.2, marginLeft: 2, }}>
                                            <Image style={{ borderRadius: 4, height: '100%' }} resizeMode="cover" source={{ uri: _.uri }} />
                                        </View>
                                    )
                                })}
                            </View>
                            <Button_ textStyle={{ color: 'white' }} onPress={openSelectPanel} buttonStyle={Style.addMore} title='Add more' rippleColor={constants.RIPPLE_COLOR} />

                        </View>
                        {error.length > 0 && <Text style={{ fontFamily: constants.FONT_SAMSUNG_LIGHT }}>{error}</Text>}
                        <Button_ textStyle={{ color: 'white' }} onPress={uploadPost} title='Upload' rippleColor={constants.RIPPLE_COLOR} />
                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Uploadproduct);
