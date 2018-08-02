import { Font } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Routes from './src/Routes';
import Colors from './constants/Colors';

EStyleSheet.build(Colors);

const fonts = {
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
};

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    rehydrated: false,
  };

  async componentDidMount() {
    await Font.loadAsync(fonts);
    this.setState({ fontLoaded: true, rehydrated: true });
  }

  render() {
    if (!this.state.fontLoaded && !this.state.rehydrated) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
