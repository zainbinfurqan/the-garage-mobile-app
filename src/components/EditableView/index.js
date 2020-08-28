import React, { } from 'react';
import { connect } from 'react-redux'
import { SafeAreaView, Text, View, Image } from 'react-native';
import helper from '../../utils/helpers'
import constants from '../../config/constants';

function EditableView(props) {
    let postData = props.route.params.postData
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, padding: 5 }}>
            <View style={{ paddingBottom: 10, paddingTop: 10 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/back.png')} />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ borderStyle: 'dashed', margin: 4, borderWidth: 1, borderRadius: 2, height: 150, flex: .33 }}></View>
                <View style={{ borderStyle: 'dashed', margin: 4, borderWidth: 1, borderRadius: 2, height: 150, flex: .33 }}></View>
                <View style={{ borderStyle: 'dashed', margin: 4, borderWidth: 1, borderRadius: 2, height: 150, flex: .33 }}></View>
            </View>
            <View style={{ margin: 4, }}>
                <Text style={{
                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                    fontSize: constants.SMALL_FONT * 1.3
                }}>{helper.nameConcatenate(postData.user)}</Text>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableView);
