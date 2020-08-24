import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text } from 'react-native'

import AfterLoginHeader from '../../components/AfterLoginHeader'
import apis from '../../utils/apis';
import Style from './style'

function FAQ(props) {

    const [faq, setFaq] = useState([])

    useEffect(() => {
        fetchFaq()
    }, [])

    async function fetchFaq() {
        try {
            const response = await apis.fetchFaq();
            console.log(response)
            setFaq(response)
        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={Style.container}>
            <AfterLoginHeader backButton={true} menuButton={false} headerText='FAQ' />
            {faq.length > 0 && faq.map((item, index) => {
                return (
                    <Text>zain</Text>

                )
            })}
        </SafeAreaView>
    )
}

export default FAQ