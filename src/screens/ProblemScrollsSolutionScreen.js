import React from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import {SimpleItem} from '../components/SimpleItem';
import {ItemWithTitle} from '../components/ItemWithTitle';

const data = [...Array(100)].map((value, index) => {
  return {
    id: index,
    title: Math.floor(Math.random() * 100).toString(),
  };
});

export const ProblemsScrollsSolutionScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    console.log('rendering item with id: ', item.id);
    return <ItemWithTitle title={item.title} />;
  };

  const HeaderComponent = () => {
    return (
      <View>
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
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HeaderComponent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    margin: 16,
  },
});
