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
    price: 0
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



    function handleChangeText(value, label) {
        if (label == 'discription') {
            dispatch({
                type: 'ON_CHANGE_TEXT',
                payload: {
                    [label]: value
                },
            });
        } else {
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
            console.log(item)
            ImagePicker.launchCamera(options, (response) => {
                console.log("camer")
                if (response.uri) {
                    let data = {
                        // filename: response.fileName,
                        name: response.fileName,
                        // path: response.path,
                        type: response.type,
                        // data: response.path,
                        // uri: response.uri
                        uri: `file://${response.path}`
                    }
                    if (images.length !== 3) {
                        uploadImage(data)
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
                        // filename: response.fileName,
                        name: response.fileName,
                        // path: response.path,
                        type: response.type,
                        // data: response.path,
                        // uri: response.uri
                        uri: `file://${response.path}`
                    }
                    if (images.length !== 3) {
                        uploadImage(data)
                    }
                    // images.push(data)
                    // setImages(images)
                }
            });
        }
    }

    function openSelectPanel() {
        setOpenSelect(true)
    }

    async function uploadPost() {
        props.loading(true)
        try {
            let body = {
                // data: {
                discription: state.discription,
                //     picUrl: '',
                priceRange: state.price,
                user: props.userData._id,
                category: selectedValue,
                sendTo: props.userData._id,
                // },
                picUrl: images
            }
            const response = await api.createPost(body);
            socket.emit('local-notification', { to: props.userData._id });
            socket.emit('local-notification', { to: response.notificationTo });

            props.loading(false)
            props.navigation.pop()
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
                    console.log(response)
                    images.push(response.secure_url)
                    setImages(images)
                    props.loading(false)
                })
        } catch (err) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: err })
        }
    }

    return (
        <>
            {openSelect && <SelectPanel open={openSelect}
                selectitem={onItmPress}
                data={[{ title: 'Open gallery' }, { title: 'Take from camera' }, { title: 'Cancle' }]} />}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 1 }}>
                    <AfterLoginHeader menuButton={false} backButton={true} />
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{}}>
                            {images.length == 0 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length > 0 && <TouchableOpacity style={[Style.uploadMain,]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[0] }} />
                                {/* <Text style={Style.uploadText}>Upload picture</Text> */}
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
                    </View>
                    {/* <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain]}>
                        <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                        <Text style={Style.uploadText}>Upload picture</Text>
                    </TouchableOpacity> */}
                    {/* </>
                    </ScrollView> */}
                    <View style={{ margin: 10 }}>
                        <NativeDropDown data={props.categories} selectedValue={selectedValue} setSelectedValue={(value) => setSelectedValue(value)} />
                        {/* <TextInput_
                            placeholder='name'
                            onChangeText={(e) => handleChangeText(e, 'name')}
                            InputStyle={Style.textInput}
                            value={state.name}
                        /> */}
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
