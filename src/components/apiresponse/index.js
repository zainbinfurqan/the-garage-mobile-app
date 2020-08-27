import React, { } from 'react';
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import style from './style'
import Button from '../../components/Button'
import constants from '../../config/constants';
import AuthActions from '../../redux/auth/action'
import CommonAction from '../../redux/common/action'

function ApiResponse(props) {

    function close() {
        props.apiresponse({ flag: false, isError: false, isSuccess: false, message: '' })
    }

    return (
        <View style={style.container}>
            <View style={
                [props.apiResponse.isSuccess && { backgroundColor: 'white' },
                props.apiResponse.isError && { backgroundColor: constants.RED, }, style.main]}
            >
                <View style={style.iconMain}>
                    <Text style={[style.responseText,
                    props.apiResponse.isError && { color: 'white' },
                    props.apiResponse.isSuccess && { color: constants.GREEN, }]}>{props.apiResponse.message}</Text>
                    {props.apiResponse.isSuccess && <Image style={style.icon} source={require('../../assets//icons/success.png')} />}
                    {props.apiResponse.isError && <Image style={style.errorIcon} source={require('../../assets//icons/cancel.png')} />}
                    <Text style={[style.text,
                    props.apiResponse.isSuccess && { color: constants.GREEN },
                    props.apiResponse.isError && { color: 'white', }
                    ]}>{props.apiResponse.isSuccess && 'Successful'}{props.apiResponse.isError && 'Error'}</Text>
                </View>
                <Button rippleColor='green' buttonStyle={[{ padding: 10, },
                props.apiResponse.isError && { backgroundColor: 'white' },
                props.apiResponse.isSuccess && { backgroundColor: constants.GREEN, }
                ]}
                    title='Continue' onPress={close}
                    textStyle={[
                        props.apiResponse.isError && { color: constants.RED },
                        props.apiResponse.isSuccess && { color: 'white', }
                    ]} />
            </View>
        </View >
    )
}

ApiResponse.defaultProps = {
    onPress: function () { },
    responseText: '',
    iconText: ''
};


const mapStateToProps = (store) => ({
    apiResponse: store.common.apiResponse
});

const mapDispatchToProps = {
    saveUserData: AuthActions.saveUserData,
    loading: CommonAction.loading,
    apiresponse: CommonAction.apiresponse
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiResponse);
