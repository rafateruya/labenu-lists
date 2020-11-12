import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import {SimpleItem} from '../components/SimpleItem';
import {ItemWithTitle} from '../components/ItemWithTitle';

const data = [...Array(100)].map((value, index) => {
  return {
    id: index,
    title: Math.floor(Math.random() * 100).toString(),
  };
});

export const ProblemsScrollsScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    console.log('rendering item with id: ', item.id);
    return <ItemWithTitle title={item.title} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        contentInsetAdjustmentBehavior="automatic">
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
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemWrapper: {
    margin: 16,
  },
});
