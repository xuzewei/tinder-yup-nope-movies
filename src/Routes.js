import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Platform, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MaterialIcons } from '@expo/vector-icons';
import {
  HomeScreen,
  IframeTrailerScreen,
  LikedMoviesScreen,
  MoviesSimilarScreen,
} from './modules';

const Routes = () => (
  <Router
    leftButtonIconStyle={{ tintColor: '#fff' }}
    sceneStyle={styles.sceneStyle}
    titleStyle={styles.titleStyle}
    navigationBarStyle={styles.navBar}
    renderRightButton={() => (
      <TouchableOpacity
        onPress={() => Actions.likedMovies()}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialIcons name="movie" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    )}
  >
    <Scene
      key="home"
      initial
      title="你喜欢的电影"
      component={HomeScreen}
    />
    <Scene
      key="trailer"
      title="试看"
      component={IframeTrailerScreen}
    />
    <Scene
      key="likedMovies"
      title="你喜欢的电影"
      component={LikedMoviesScreen}
    />
    <Scene
      key="moviesSimilar"
      title="相似的电影"
      component={MoviesSimilarScreen}
    />
  </Router>
);

const styles = EStyleSheet.create({
  sceneStyle: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
  },
  titleStyle: {
    fontFamily: 'montserrat-regular',
    color: '#fff',
  },
  navBar: {
    backgroundColor: '$blackColor',
  },
});

export default Routes;
