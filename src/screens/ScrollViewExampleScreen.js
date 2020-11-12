import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';
import { SimpleItem } from '../components/SimpleItem'

export const ScrollViewExampleScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                    <View style={styles.itemWrapper}>
                        <SimpleItem />
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    itemWrapper: {
        margin: 16
    }
});