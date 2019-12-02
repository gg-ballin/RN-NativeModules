/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  NativeModules,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
const {ToastModule} = NativeModules;

const App = () => {
  const _onPressButton = () => {
    ToastModule.showText(`Funciona!!`, ToastModule.LENGTH_SHORT);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button onPress={_onPressButton} title="Boton Toast + Nuevo Activity" />
      </View>
    </>
  );
};

export default App;
