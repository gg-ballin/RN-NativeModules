/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  NativeModules,
  View,
  Text,
  StatusBar,
  Button,
  Platform,
  Alert,
  requireNativeComponent,
  TouchableOpacity,
} from 'react-native';
const {ToastModule, RNHello} = NativeModules;

const App = () => {
  const [count, setCount] = useState(0);
  const CounterView = requireNativeComponent('CounterView');
  const _onPressButtonAndroid = () => {
    if (Platform.OS == 'android') {
      ToastModule.showText('Funciona!!', ToastModule.LENGTH_SHORT);
    } else {
      Alert.alert('Funciona', 'Esto ta bien');
    }
  };

  const _onPressButtoniOS = () => {
    RNHello.addEvent('Birthday Party', 'My House');
    Alert.alert('Alerta', 'Esto triggerea la consola en xCode');
  };

  const sumando = () => {
    setCount(prevState => prevState + 1);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, justifyContent: 'center', borderWidth: 3}}>
        <Button onPress={_onPressButtonAndroid} title="ANDROID" />
        <Button onPress={_onPressButtoniOS} title="iOS" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.wrapper, styles.border]}
          onPress={() => sumando()}>
          <Text style={styles.button}>{count}</Text>
        </TouchableOpacity>
        <CounterView style={styles.wrapper} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  button: {
    fontSize: 50,
    color: 'orange',
  },
});
export default App;
