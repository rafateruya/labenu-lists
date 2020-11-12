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
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.container}>
                    <Button style={styles.navigationButton} color={'blue'} onPress={() => { navigation.navigate('ScrollView') }} title={'Scroll View'} />
                    <Button style={styles.navigationButton} color={'blue'} onPress={() => { navigation.navigate('FlatList') }} title={'Flat List'} />
                    <Button style={styles.navigationButton} color={'blue'} onPress={() => { navigation.navigate('IntegratedFlatList') }} title={'Integrated Flat List'} />
                    <Button style={styles.navigationButton} color={'blue'} onPress={() => { navigation.navigate('SectionList') }} title={'Section List'} />
                    <Button style={styles.navigationButton} color={'blue'} onPress={() => { navigation.navigate('ProblemScrolls') }} title={'Scrolls Problem'} />
                    <Button style={styles.navigationButton} color={'blue'} onPress={() => { navigation.navigate('ProblemScrollsSolution') }} title={'Scrolls Problem Solution'} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
});