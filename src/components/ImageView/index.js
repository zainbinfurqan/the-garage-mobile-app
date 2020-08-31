import React, { } from 'react'
import { SafeAreaView, Text, Image, View } from 'react-native'
import Style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

function ImageView(props) {
    return (
        <SafeAreaView style={Style.container}>
            <TouchableOpacity onPress={props.back} style={Style.backMain}>
                <Image style={Style.backIcon} source={require('../../assets/icons/back.png')} />
            </TouchableOpacity>
            <View style={Style.imageContainer}>
                <View style={Style.imageMain}>
                    <Image style={Style.image} source={{ uri: props.imageViewUrl }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

ImageView.defaultProps = {
    imageViewUrl: '',
    back: function () { }
}

export default ImageView