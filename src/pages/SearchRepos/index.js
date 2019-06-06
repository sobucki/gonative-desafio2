import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  View, TextInput, TouchableOpacity, FlatList, Text, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import RepoItem from './RepoItem';

import api from '~/services/api';

import style from './styles';

export default class SearchRepos extends Component {
  state = {
    inputRep: '',
    error: '',
    loadingButton: false,
    repoList: [],
    refreshing: false,
    loadingList: true,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = await AsyncStorage.getItem('@Gitissues:repos');

    this.setState({
      repoList: JSON.parse(repositories) || [],
      inputRep: '',
      error: '',
      refreshing: false,
      loadingList: false,
    });
  };

  addRepository = async () => {
    const { inputRep, repoList, loadingList } = this.state;

    if (loadingList) return;

    // inicia o loading do botao
    this.setState({ loadingButton: true, loadingList: true });

    if (!inputRep) {
      this.setState({
        error: 'Favor informar um repositório',
        loadingButton: false,
        loadingList: false,
      });
      return;
    }
    try {
      // busca o repositorio, caso de erro vai para o catch
      const { data } = await api.get(`/repos/${inputRep}`);

      // verifica se repositorio ja existe
      if (repoList.find(item => item.id === data.id)) {
        this.setState({ error: 'Repositório existente' });
        return;
      }

      this.setState({ repoList: [data, ...repoList], error: '', inputRep: '' });

      // salva no armazenamento local a listagem atualizada
      await AsyncStorage.setItem('@Gitissues:repos', JSON.stringify([data, ...repoList]));
    } catch (error) {
      this.setState({ error: 'Não foi possível encontrar o repositório' });
    } finally {
      this.setState({ loadingButton: false, loadingList: false });
    }
  };

  cleanError = () => {
    this.setState({ error: '' });
  };

  renderItemList = ({ item }) => <RepoItem repository={item} />;

  render() {
    const {
      repoList, inputRep, error, loadingButton, refreshing, loadingList,
    } = this.state;
    return (
      <View style={style.container}>
        <Header title="GitIssues" />
        <View style={style.form}>
          <TextInput
            style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={inputRep}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ inputRep: text })}
          />
          <TouchableOpacity onPress={this.addRepository} style={style.buttonPlus}>
            {loadingButton ? (
              <ActivityIndicator size="small" />
            ) : (
              <Icon name="plus" size={20} style={style.icon} />
            )}
          </TouchableOpacity>
        </View>
        {!!error && (
          <Text onPress={this.cleanError} style={style.textError}>
            {error}
          </Text>
        )}
        {loadingList && <ActivityIndicator size="large" style={style.loadList} />}
        <FlatList
          data={repoList}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItemList}
          refreshing={refreshing}
          onRefresh={this.loadRepositories}
          contentContainerStyle={style.listView}
        />
      </View>
    );
  }
}
