import React, { Component } from 'react';
import PropType from 'prop-types';
import {
  View, FlatList, ActivityIndicator, Text,
} from 'react-native';

import api from '~/services/api';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';
import IssueItem from './IssueItem';
import style from './styles';
import FilterOptions from './FilterOptions';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropType.shape({}).isRequired,
  };

  state = {
    data: [],
    loading: false,
    error: '',
    refreshing: false,
    filter: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { navigation } = this.props;
    const { filter } = this.state;
    this.setState({ loading: true, error: '', refreshing: true });
    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam('full_name')}/issues?state=${filter}`,
      );
      this.setState({ data });
    } catch (error) {
      this.setState({ error: 'Não foi possível carregar as issues, toque para recarregar' });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderItemList = ({ item }) => <IssueItem issue={item} />;

  changeFilter = (filter) => {
    this.setState({ filter }, this.loadIssues);
  };

  render() {
    const {
      data, loading, error, refreshing,
    } = this.state;
    return (
      <View style={style.container}>
        <Header title="Issues" hasBackButton />
        <FilterOptions
          onChange={this.changeFilter}
          initialValue="all"
          optionsList={[
            { value: 'all', title: 'Todas' },
            { value: 'open', title: 'Abertas' },
            { value: 'closed', title: 'Fechadas' },
          ]}
        />
        {!!error && (
          <Text onPress={this.loadIssues} style={style.textError}>
            {error}
          </Text>
        )}
        {loading ? (
          <ActivityIndicator size="large" style={style.loading} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={issue => String(issue.id)}
            renderItem={this.renderItemList}
            contentContainerStyle={style.listIssues}
            refreshing={refreshing}
            onRefresh={this.loadIssues}
            ListEmptyComponent={() => (
              <View style={style.emptyList}>
                <Icon name="smile-o" size={20} style={style.emptyIcon} />
                <Text style={style.emptyMessage}>Nenhuma issue aberta</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}
