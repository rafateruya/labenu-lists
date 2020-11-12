import React from 'react';
import { StyleSheet, View } from 'react-native'

export const SimpleItem = () => {
    return (
        <View style={styles.box}>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
        padding: 16,
    }
});