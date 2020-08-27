import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import Collapsible from 'react-native-collapsible';

import AfterLoginHeader from '../../components/AfterLoginHeader'
import apis from '../../utils/apis';
import Style from './style'
import constants from '../../config/constants';

function FAQ(props) {

    const [faq, setFaq] = useState([
        {
            title: 'How to post',
            content: 'emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            title: 'What i do if i am blocked ',
            content: 'emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            title: 'What is post apporve',
            content: 'emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },

    ])
    const [activeSections, setActiveSections] = useState([])

    useEffect(() => {
        fetchFaq()
    }, [])

    async function fetchFaq() {
        try {
            const response = await apis.fetchFaq();
            console.log("response=>", response)
            setFaq(response)
        } catch (error) {

        }
    }


    _renderHeader = section => {
        return (
            <View style={{ padding: 5, marginTop: 10, flexDirection: 'row' }}>
                <Image style={{ transform: [{ rotate: '180deg' }], marginRight: 5, height: 20, width: 20 }} source={require('../../assets/icons/back.png')} />
                <Text style={{
                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                    fontSize: constants.SMALL_FONT * 1.6
                }}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={{ padding: 5 }}>
                <Text style={{
                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                    fontSize: constants.SMALL_FONT * 1.2,
                    color: constants.GERY
                }}>{section.text}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        setActiveSections(activeSections);
    };

    return (
        <SafeAreaView style={[Style.container,]}>
            <AfterLoginHeader backButton={true} menuButton={false} headerText='FAQ' />
            {/* {faq.map((item, index) => {
                return (
                    <Collapsible collapsed={true} style={{ borderWidth: 1 }}>
                        <Text>zain</Text>
                    </Collapsible>
                )
            })} */}
            <View style={{ margin: 10 }}>
                <Accordion
                    sections={faq}
                    underlayColor={constants.LINE_COLOR}
                    activeSections={activeSections}
                    // renderSectionTitle={_renderSectionTitle}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                    onChange={_updateSections}
                />
            </View>

        </SafeAreaView>
    )
}

export default FAQ