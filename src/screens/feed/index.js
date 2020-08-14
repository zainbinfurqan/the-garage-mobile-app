import React, { } from 'react';
import { View, SafeAreaView } from 'react-native';
import Style from './style'
import BeforLoginHeader from '../../components/BeforLoginHeader'

function PostsFeed(props) {
    return (
        <SafeAreaView style={Style.container}>
            <BeforLoginHeader />

        </SafeAreaView>
    )
}

export default PostsFeed