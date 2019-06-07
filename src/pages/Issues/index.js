import React, { Component } from 'react';
import PropType from 'prop-types';
import { View, FlatList } from 'react-native';

import api from '~/services/api';
import Header from '~/components/Header';
import IssueItem from './IssueItem';

import style from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropType.shape({}).isRequired,
  };

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

  renderItemList = ({ item }) => <IssueItem issue={item} />;

  render() {
    const { data } = this.state;
    return (
      <View style={style.container}>
        <Header title="Issues" hasBackButton />

        <FlatList
          data={data}
          keyExtractor={issue => String(issue.id)}
          renderItem={this.renderItemList}
          contentContainerStyle={style.listIssues}
        />
      </View>
    );
  }
}
