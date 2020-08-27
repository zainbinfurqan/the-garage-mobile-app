import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux'
import AfterLoginHeader from '../../components/AfterLoginHeader';
import NativeDropDown from '../../components/NativeDropDown'
import TextInput_ from '../../components/Input/TextInput'
import SelectPanel from '../../components/SelectOptions'
import constants from '../../config/constants';
import Button_ from '../../components/Button'
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
    const [selectedValue, setSelectedValue] = useState("");
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
            ImagePicker.launchCamera(options, (response) => {
                if (response.uri) {
                    let data = {
                        filename: response.fileName,
                        path: response.path,
                        type: response.type,
                        data: response.path,
                        uri: response.uri
                    }
                    images.push(data)
                    setImages(images)
                }
            });
        }
        if (item == 'Open gallery') {
            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.uri) {
                    let data = {
                        filename: response.fileName,
                        path: response.path,
                        type: response.type,
                        data: response.path,
                        uri: response.uri
                    }
                    images.push(data)
                    setImages(images)
                }
            });
        }
    }

    function openSelectPanel() {
        setOpenSelect(true)
    }

    return (
        <>
            {openSelect && <SelectPanel open={openSelect}
                selectitem={onItmPress}
                data={[{ title: 'Open gallery' }, { title: 'Take from camera' }, { title: 'Cancle' }]} />}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 1 }}>
                    <AfterLoginHeader menuButton={false} backButton={true} />
                    {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ borderWidth: 1, flexDirection: 'row' }}> */}
                    {/* <> */}
                    {/* {images.length > 0 && images.map((item, index) => {
                                return (
                                    <View style={{ borderWidth: 1, width: 100, height: 180 }} >
                                        <Image style={{ width: 100, height: 180 }} source={{ uri: item.uri }} />
                                    </View>
                                )
                            })} */}
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{}}>
                            {images.length == 0 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length > 0 && <TouchableOpacity style={[Style.uploadMain,]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[0].uri }} />
                                {/* <Text style={Style.uploadText}>Upload picture</Text> */}
                            </TouchableOpacity>}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {images.length >= 0 && images.length <= 1 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length >= 2 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[1].uri }} />
                            </TouchableOpacity>}
                            {images.length >= 0 && images.length <= 2 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={Style.uploadIcon} source={require('../../assets/icons/upload.png')} />
                                <Text style={Style.uploadText}>Upload picture</Text>
                            </TouchableOpacity>}
                            {images.length == 3 && <TouchableOpacity onPress={openSelectPanel} style={[Style.uploadMain, { flex: .5 }]}>
                                <Image style={[Style.uploadIcon, { height: 125, width: 125 }]} source={{ uri: images[2].uri }} />
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
                        <NativeDropDown data={constants.CATEGORIES} selectedValue={selectedValue} setSelectedValue={(value) => setSelectedValue(value)} />
                        <TextInput_
                            placeholder='name'
                            onChangeText={(e) => handleChangeText(e, 'name')}
                            InputStyle={Style.textInput}
                            value={state.name}
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
                        <Button_ title='Upload' rippleColor={constants.RIPPLE_COLOR} />
                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Uploadproduct);
