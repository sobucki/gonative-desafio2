import React from 'react';
import PropType from 'prop-types';

import {
  View, TouchableOpacity, Image, Text, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from './styles';

const IssueItem = ({ issue }) => (
  <TouchableOpacity
    style={style.container}
    onPress={() => {
      Linking.openURL(issue.html_url);
    }}
  >
    <Image style={style.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={style.infosContainer}>
      <Text style={style.title} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text style={style.user}>{issue.user.login}</Text>
    </View>
    <Icon name="chevron-right" size={16} style={style.iconNext} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropType.shape({
    title: PropType.string,
    user: PropType.shape({
      avatar_url: PropType.string,
    }),
  }).isRequired,
};

export default IssueItem;
