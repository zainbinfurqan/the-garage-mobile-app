import React, { } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Style from './style'
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';

function ImagesCanas({ images, openImageView }) {
    console.log(openImageView)
    console.log("images=>", images)
    let rotate = 10;
    return (
        <TouchableOpacity onPress={() => openImageView()} style={[Style.productImagesMain, { alignSelf: 'center' }]}>
            {images.map((_, i) => {
                return (
                    <>
                        <Image source={{ uri: _ }}
                            style={{
                                borderWidth: 1,
                                position: 'absolute',
                                height: 250,
                                width: '50%',
                                borderRadius: 5,
                                alignSelf: 'center',
                                transform: [{ rotate: `${rotate * i}deg` }]
                            }} />
                    </>
                )
            })}
        </TouchableOpacity>
    )
}
export default ImagesCanas