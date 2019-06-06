import React, { Component } from 'react';

import {
  View, TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import RepoItem from './RepoItem';

import api from '~/services/api';

import style from './styles';

export default class SearchRepos extends Component {
  state = {
    inputRep: '',
    repoList: [],
  };

  checkRepExist = async (input) => {
    const { data } = await api.get(`/repos/${input}`);
    console.tron.log(data);

    return data;
  };

  addRepository = async () => {
    const { inputRep, repoList } = this.state;

    try {
      const repository = await this.checkRepExist(inputRep);

      this.setState({ repoList: [...repoList, repository] });
    } catch (error) {
      console.tron.log(error);
    }
  };

  renderItemList = ({ item }) => <RepoItem repository={item} />;

  render() {
    const { repoList, inputRep } = this.state;
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
            <Icon name="plus" size={20} style={style.icon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={repoList}
          style={style.listView}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItemList}
        />
      </View>
    );
  }
}
