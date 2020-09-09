import React, { } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Style from './style'
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';

function ImagesCanas({ images, openImageView }) {
    let rotate = 10;
    return (
        <TouchableOpacity onPress={() => openImageView()} style={[Style.productImagesMain, { alignSelf: 'center' }]}>
            {images.map((_, i) => {
                return (
                    <Image key={i} source={{ uri: images[images.length - (i + 1)] }}
                        style={[Style.image, { transform: [{ rotate: `${rotate * i}deg` }] }]} />
                )
            })}
        </TouchableOpacity>
    )
}
export default ImagesCanas