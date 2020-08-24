import React, { } from 'react';
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

function AdminDashbaord(props) {
    return (
        <SafeAreaView style={{ borderWidth: 1, flex: 1, backgroundColor: 'white' }}>

        </SafeAreaView>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashbaord);
