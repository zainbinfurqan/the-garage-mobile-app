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
import { cos } from 'react-native-reanimated';
const initialState = {
    name: '',
    discription: '',
    picUrl: '',
    category: '',
    price: '',
    title: '',
    images: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_CHANGE_TEXT':
            return { ...state, ...action.payload };
        case 'ON_SELECT_IMAGE':
            return { ...state, images: action.payload };
        case 'ON_UN_SELECT_IMAGE':
            return { ...state, images: action.payload };
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
    const [openCategorySelect, setOpenCategorySelect] = useState(false)
    const [openAutoPartsCategorySelect, setAutoPartsCategoryOpenSelect] = useState(false)
    const [openSubAutoPartsCategorySelect, setSubAutoPartsCategoryOpenSelect] = useState(false)
    const [images, setImages] = useState([])
    const [autoPartsCategory, setAutoPartsCategory] = useState([])
    const [subAutoPartsCategory, setSubAutoPartsCategory] = useState([])
    const [selectedAutoPartCategory, setSelectedAutoPartCategory] = useState('');
    const [selectedSubAutoPartCategory, setSelectedSubAutoPartCategory] = useState('');
    const [error, setError] = useState({});
    const numberRegx = /^[0-9]*$/

    useEffect(() => {
        dispatch({
            type: 'ON_SELECT_IMAGE',
            payload: [],
        });
    }, [])

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
        if (item._id == 1) {
            ImagePicker.launchCamera(options, (response) => {
                if (response.uri) {
                    let data = {
                        // data: response.data,
                        filename: response.fileName,
                        path: `file://${response.path}`,
                        type: response.type,
                        uri: response.uri,
                    }
                    if (state.images.length !== 5) {
                        delete error.images
                        setError(error)
                        let a = state.images;
                        a.push(data)
                        dispatch({
                            type: 'ON_SELECT_IMAGE',
                            payload: a,
                        });
                    }
                }
            });
        }
        if (item._id == 2) {
            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.uri) {
                    let data = {
                        // data: response.data,
                        filename: response.fileName,
                        path: `file://${response.path}`,
                        type: response.type,
                        uri: response.uri,
                    }
                    if (state.images.length !== 5) {
                        delete error.images
                        setError(error)
                        let a = state.images;
                        a.push(data)
                        dispatch({
                            type: 'ON_SELECT_IMAGE',
                            payload: a,
                        });
                    }
                }
            });
        }
    }

    function openSelectPanel() {
        images.length < 5 ? setOpenSelect(true) : setError('you cannot upload more then 5 images')
    }

    async function uploadPost() {
        try {
            const isValidated = checkValidation();
            if (isValidated) {
                props.loading(true)
                let body = {
                    data: {
                        discription: state.discription,
                        title: state.title,
                        priceRange: state.price,
                        user: props.userData._id,
                        category: selectedValue,
                        sendTo: props.userData._id,
                        isApproved: props.userData.role.includes('admin') ? true : false,
                        isAdmin: props.userData.role.includes('admin') ? true : false,
                    },
                    images: state.images
                }
                if (selectedValue !== '5f3a88e08b37cd378868643c' && selectedValue !== '5f3a89188b37cd378868643e') {
                    if (selectedAutoPartCategory) {
                        body.data.autoPartsCategory = selectedAutoPartCategory._id
                    }
                    if (selectedSubAutoPartCategory) {
                        body.data.subAutoPartsCategory = selectedSubAutoPartCategory._id
                    }
                }
                const response = await api.createPost(body, props.userData.token);
                dispatch({
                    type: 'ON_SELECT_IMAGE',
                    payload: [],
                });
                // socket.emit('local-notification', { to: props.userData._id });
                // socket.emit('local-notification', { to: response.data.notificationTo });
                props.loading(false)
                props.navigation.pop()
            }

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
        props.loading(true)
        try {
            let params = { category }
            let response = await api.fetchAutoPartsCategory(null, null, null, params)
            setAutoPartsCategory(response)
            props.loading(false)
        } catch (error) {
            props.loading(false)
        }
    }

    async function getSubAutoPartCategory(autopartcategory) {
        props.loading(true)
        try {
            let params = { category: selectedValue, autoPartsCategory: autopartcategory._id }
            let response = await api.fetchSubAutoPartsCategory(null, null, null, params)
            setSubAutoPartsCategory(response)
            props.loading(false)
        } catch (error) {
            props.loading(false)
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

    function removeImage(index) {
        let a = state.images;
        a.splice(index, 1);
        // console.log(data)
        dispatch({
            type: 'ON_UN_SELECT_IMAGE',
            payload: a,
        });
    }

    function checkValidation() {
        const errors = {};

        if (!state.title.trim()) {
            errors.title = 'This field is required';
        }

        if (!state.discription.trim()) {
            errors.discription = 'This field is required';
        }

        if (!state.price) {
            errors.price = 'This field is required';
        } else {
            if (!numberRegx.test(state.price.trim())) {
                errors.price = 'Price only number';
            }
        }

        if (state.images.length == 0) {
            errors.images = 'This field is required , please upload at least one image';
        }
        if (!selectedValue) {
            errors.category = 'This field is required';
        }

        if (autoPartsCategory.length > 0 && !selectedAutoPartCategory) {
            errors.autoPartsCategory = 'This field is required';
        }

        if (subAutoPartsCategory.length > 0 && !selectedSubAutoPartCategory) {
            errors.subAutoPartsCategory = 'This field is required';
        }


        setError(errors)

        return !Object.keys(errors).length;
    }

    return (
        <>
            {openSelect &&
                <SelectPanel open={openSelect}
                    selectitem={onItmPress}
                    data={[{ name: 'Open gallery', _id: 2 }, { name: 'Take from camera', _id: 1 }, { name: 'Cancle', _id: 3 }]} />}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 1 }}>
                    <AfterLoginHeader menuButton={false} backButton={true} />
                    <View style={{ margin: 10 }}>
                        <TextInput_
                            placeholder='Title'
                            onChangeText={(e) => handleChangeText(e, 'title')}
                            InputStyle={Style.textInput}
                            value={state.title}
                            error={error && error.title}
                        />
                        <TextInput_
                            placeholder='discription'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(e) => handleChangeText(e, 'discription')}
                            InputStyle={Style.textInputArea}
                            value={state.discription}
                            error={error && error.discription}
                        />
                        <TextInput_
                            placeholder='price'
                            onChangeText={(e) => handleChangeText(e, 'price')}
                            InputStyle={Style.textInput}
                            value={state.price}
                            error={error && error.price}
                        />
                        {error && error.category && <>
                            <Text style={Style.errorText1}>{error.category} </Text><Text style={Style.errorText2}>Error</Text>
                        </>}
                        <NativeDropDown
                            data={props.categories}
                            selectedValue={selectedValue}
                            setSelectedValue={(value) => selectCategoryHandle(value)} />
                        {/* auto parts category text */}
                        {error && error.autoPartsCategory && <View style={{ flexDirection: 'row' }}>
                            <Text style={Style.errorText1}>{error.autoPartsCategory} </Text><Text style={Style.errorText2}>Error</Text>
                        </View>}
                        {autoPartsCategory.length > 0 &&
                            <TouchableOpacity
                                onPress={() => setAutoPartsCategoryOpenSelect(!openAutoPartsCategorySelect)}
                                style={Style.selectAutoPartsCateogy}>
                                <Text
                                    style={{ fontFamily: constants.FONT_SAMSUNG_LIGHT, marginLeft: 5 }} >
                                    {selectedAutoPartCategory ? selectedAutoPartCategory.name : 'Select Auto part category'}</Text>
                            </TouchableOpacity>}
                        {/* auto parts category text */}
                        {/* sub auto parts category text */}
                        {error && error.subAutoPartsCategory && <View style={{ flexDirection: 'row' }}>
                            <Text style={Style.errorText1}>{error.subAutoPartsCategory} </Text><Text style={Style.errorText2}>Error</Text>
                        </View>}
                        {subAutoPartsCategory.length > 0 &&
                            <TouchableOpacity
                                onPress={() => setSubAutoPartsCategoryOpenSelect(!openAutoPartsCategorySelect)}
                                style={Style.selectAutoPartsCateogy}>
                                <Text style={{ fontFamily: constants.FONT_SAMSUNG_LIGHT, marginLeft: 5 }}>
                                    {selectedSubAutoPartCategory ? selectedSubAutoPartCategory.name : 'Select Auto part category'}</Text>
                            </TouchableOpacity>}
                        {/* sub auto parts category text */}
                        {/* auto parts category drowdown */}
                        {openAutoPartsCategorySelect &&
                            <SelectPanel closeHandle={() => setAutoPartsCategoryOpenSelect(!openAutoPartsCategorySelect)} open={openAutoPartsCategorySelect}
                                selectitem={(value) => { selectAutoPartCategoryHandle(value), setAutoPartsCategoryOpenSelect(!openAutoPartsCategorySelect) }}
                                data={autoPartsCategory} />}
                        {/*  auto parts category drowdown */}
                        {/* sub auto parts category drowdown */}
                        {openSubAutoPartsCategorySelect &&
                            <SelectPanel closeHandle={() => setSubAutoPartsCategoryOpenSelect(!openSubAutoPartsCategorySelect)} open={openSubAutoPartsCategorySelect}
                                selectitem={(value) => { selectSubAutoPartCategory(value), setSubAutoPartsCategoryOpenSelect(!openSubAutoPartsCategorySelect) }}
                                data={subAutoPartsCategory} />}
                        {/* sub auto parts category drowdown */}
                        {/* {autoPartsCategory.length > 0 && <NativeDropDown data={autoPartsCategory} selectedValue={selectedAutoPartCategory} setSelectedValue={(value) => selectAutoPartCategoryHandle(value)} />} */}
                        {/* {subAutoPartsCategory.length > 0 && <NativeDropDown data={subAutoPartsCategory} selectedValue={selectedSubAutoPartCategory} setSelectedValue={(value) => selectSubAutoPartCategory(value)} />} */}
                        {error && error.images && <View style={{ flexDirection: 'row' }}>{console.log("error=>", error)}<Text style={Style.errorText1}>{error.images} </Text><Text style={Style.errorText2}>Error</Text></View>}
                        <View style={Style.uploadMain}>
                            <View style={{ flexDirection: 'row' }}>
                                {state.images.map((_, i) => {
                                    return (
                                        <View key={i}
                                            style={Style.imageMain}>
                                            <TouchableOpacity
                                                onPress={() => removeImage(i)}
                                                style={[Style.removeImageMain,]}>
                                                <Text style={Style.removeImagebuttonText}>X</Text>
                                            </TouchableOpacity>
                                            <Image
                                                style={Style.image}
                                                resizeMode="cover" source={{
                                                    // uri: `data:${_.type};base64,${_.data}`
                                                    uri: _.uri
                                                }} />
                                        </View>
                                    )
                                })}
                            </View>
                            <Button_
                                disabled={state.images.length == 5 ? true : false}
                                textStyle={{ color: 'white' }}
                                onPress={openSelectPanel}
                                buttonStyle={Style.addMore}
                                bgColor={state.images.length == 5 ? constants.DISABLE_RIPPLE_COLOR : constants.RED}
                                title={state.images.length > 0 ? 'Add More' : 'Upload Image'}
                                rippleColor={state.images.length == 5 ? constants.RIPPLE_COLOR : constants.DISABLE_RIPPLE_COLOR} />
                        </View>
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
