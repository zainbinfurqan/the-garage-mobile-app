import React, { } from 'react'
import { SafeAreaView, Text, Image, View } from 'react-native'
import Style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImageViewer from 'react-native-image-zoom-viewer';

function ImageView(props) {
    return (
        <SafeAreaView style={Style.container}>
            <TouchableOpacity activeOpacity={0.9} onPress={props.back} style={Style.backMain}>
                <Image style={Style.backIcon} source={require('../../assets/icons/back-white.png')} />
            </TouchableOpacity>
            <ImageViewer style={{ height: 100, width: '100%' }} imageUrls={props.images} />
            {/* <View style={Style.imageContainer}>
                <View style={Style.imageMain}>
                    <Image resizeMode='contain' style={Style.image} source={{ uri: props.imageViewUrl }} />
                </View>
            </View> */}
        </SafeAreaView>
    )
}

ImageView.defaultProps = {
    imageViewUrl: '',
    back: function () { }
}

export default ImageView