import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {ScrollViewExampleScreen} from './src/screens/ScrollViewExampleScreen';
import {FlatListExampleScreen} from './src/screens/FlatListExampleScreen';
import {IntegratedFlatListExampleScreen} from './src/screens/IntegratedFlatListExampleScreen';
import {SectionListExampleScreen} from './src/screens/SectionListExampleScreen';
import {ProblemsScrollsScreen} from './src/screens/ProblemScrollsScreen';
import {ProblemsScrollsSolutionScreen} from './src/screens/ProblemScrollsSolutionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'ScrollView'} component={ScrollViewExampleScreen} />
        <Stack.Screen name={'FlatList'} component={FlatListExampleScreen} />
        <Stack.Screen
          name={'IntegratedFlatList'}
          component={IntegratedFlatListExampleScreen}
        />
        <Stack.Screen
          name={'SectionList'}
          component={SectionListExampleScreen}
        />
        <Stack.Screen
          name={'ProblemScrolls'}
          component={ProblemsScrollsScreen}
        />
        <Stack.Screen
          name={'ProblemScrollsSolution'}
          component={ProblemsScrollsSolutionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
