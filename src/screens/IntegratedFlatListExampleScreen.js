import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {ItemWithTitle} from '../components/ItemWithTitle';
import {fetchData} from '../services/items/fetchData';

export const IntegratedFlatListExampleScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [isLoadingMoreItems, setIsLoadingMoreItems] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems();
  });

  const fetchItems = async (lastItemId) => {
    if (lastItemId) {
      setIsLoadingMoreItems(true);
      const newItems = await fetchData(lastItemId);
      setIsLoadingMoreItems(false);
      setData([...data, ...newItems]);
    } else {
      setIsRefreshing(true);
      const items = await fetchData();
      setIsRefreshing(false);
      setData([...items]);
    }
  };

  const renderItem = ({item}) => <ItemWithTitle title={item.title} />;

  const onRefresh = () => {
    fetchItems();
  };

  const onEndReached = () => {
    fetchItems(data[data.length - 1].id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{flexGrow: 1}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
        ListFooterComponent={isLoadingMoreItems ? ActivityIndicator : null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
