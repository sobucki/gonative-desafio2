import React from 'react';
import PropType from 'prop-types';

import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from './styles';

const RepoItem = ({ repository, navigation: { navigate } }) => (
  <TouchableOpacity
    style={style.repoItem}
    onPress={() => navigate('Issues', { title: repository.name, full_name: repository.full_name })}
  >
    <Image style={style.logo} source={{ uri: repository.owner.avatar_url }} />
    <View style={style.infoRepo}>
      <Text style={style.nameRepo}>{repository.full_name}</Text>
      <Text style={style.nameOrg}>{repository.owner.login}</Text>
    </View>
    <Icon name="chevron-right" size={16} style={style.iconNext} />
  </TouchableOpacity>
);

RepoItem.propTypes = {
  repository: PropType.shape({
    full_name: PropType.string,
    owner: PropType.shape({
      login: PropType.string,
      avatar_url: PropType.string,
    }),
  }).isRequired,
  navigation: PropType.shape({
    navigation: PropType.func,
  }).isRequired,
};

export default withNavigation(RepoItem);
