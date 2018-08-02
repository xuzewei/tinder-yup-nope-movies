import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import styles from './styles/MovieMeta';
import Panel from './Panel';
import { getMovieTrailer } from '../actions';

class MovieMeta extends Component {
  componentDidMount() {
    this.props.getMovieTrailer(this.props.movie.id);
    console.log('====================================');
    console.log(this.props.movie.id);
    console.log(this.props.data);
    console.log('====================================');
  }

  _goToTrailer = () => {
    this.props.closeModalInfo();
    Actions.trailer({ trailerId: this.props.data.videos[0].key });
  };

  render() {
    const { movie } = this.props;
    return (
      <View style={styles.bottomContainer}>
        <Panel title="评价">
          <Text style={styles.panelText}>
            {movie.vote_average} <FontAwesome name="star" color="#fff" /> / {''}
            {movie.vote_count} <FontAwesome name="users" color="#fff" />
          </Text>
        </Panel>
        <Panel title="发行日期">
          <Text style={styles.panelText}>
            <FontAwesome name="calendar" color="#fff" /> {movie.release_date}
          </Text>
        </Panel>
        <Panel title="试看">
          <TouchableOpacity onPress={this._goToTrailer}>
            <View style={styles.buttonTrailer}>
              <Text style={styles.buttonText}>Watch here</Text>
            </View>
          </TouchableOpacity>
        </Panel>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.infoModal,
  }),
  { getMovieTrailer }
)(MovieMeta);
