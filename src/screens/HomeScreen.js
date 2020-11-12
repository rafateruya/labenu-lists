import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Button} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Button
            style={styles.navigationButton}
            color={'blue'}
            onPress={() => {
              navigation.navigate('ScrollView');
            }}
            title={'Scroll View'}
          />
          <Button
            style={styles.navigationButton}
            color={'blue'}
            onPress={() => {
              navigation.navigate('FlatList');
            }}
            title={'Flat List'}
          />
          <Button
            style={styles.navigationButton}
            color={'blue'}
            onPress={() => {
              navigation.navigate('IntegratedFlatList');
            }}
            title={'Integrated Flat List'}
          />
          <Button
            style={styles.navigationButton}
            color={'blue'}
            onPress={() => {
              navigation.navigate('SectionList');
            }}
            title={'Section List'}
          />
          <Button
            style={styles.navigationButton}
            color={'blue'}
            onPress={() => {
              navigation.navigate('ProblemScrolls');
            }}
            title={'Scrolls Problem'}
          />
          <Button
            style={styles.navigationButton}
            color={'blue'}
            onPress={() => {
              navigation.navigate('ProblemScrollsSolution');
            }}
            title={'Scrolls Problem Solution'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
