import React from 'react';
import { View, Image } from 'react-native';
import { POSTER } from '../../../../constants/api';
import styles from './styles/Card';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.posterCard}>
        <Image style={styles.poster} source={{ uri: `${POSTER}/${this.props.poster_path}` }} />
      </View>
    );
  }
}

export default Card;
