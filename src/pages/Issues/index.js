import React, { Component } from 'react';

import { View, Text } from 'react-native';

import api from '~/services/api';

// import { Container } from './styles';

export default class Issues extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { navigation } = this.props;
    const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues`);
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <View>
        {data.map(info => (
          <Text>{info.title}</Text>
        ))}
      </View>
    );
  }
}
