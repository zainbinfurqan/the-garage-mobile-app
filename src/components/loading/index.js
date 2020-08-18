import React, { useState, useEffect } from 'react';
import { View, Dimensions, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import style from './style';

function loader(props) {
    let [RotateValueHolder, setRotateValueHolder] = useState(
        new Animated.Value(0),
    );

    useEffect(() => {
        StartImageRotateFunction();
    }, []);

    function StartImageRotateFunction() {
        RotateValueHolder.setValue(0);
        Animated.timing(RotateValueHolder, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => StartImageRotateFunction());
    }

    const RotateData = RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={style.container}>
            <Animated.Image
                style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    transform: [{ rotate: RotateData }],
                }}
                source={require('../../assets/images/loading.png')}
            />
        </View>
    );
}

const mapDispatchToProps = {
};
// export default loader;
export default connect(null, mapDispatchToProps)(loader);