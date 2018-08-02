import React from 'react';
import { View, WebView } from 'react-native';

const IframeTrailerScreen = ({ trailerId }) => (
  <View style={{ flex: 1 }}>
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled
      source={{ uri: `http://www.youtube.com/embed/${trailerId}` }}
      // source={{ uri: 'https://h5.m.taopiaopiao.com/app/movie/pages/index/show-preview.html?spm=a1z2r.7661912.home.d_440300_2_0_227592.25a5112aCKxwPp&from=def&showid=227592&sqm=a1z2r.7661912.1.1' }}
    />
  </View>
);

export default IframeTrailerScreen;
