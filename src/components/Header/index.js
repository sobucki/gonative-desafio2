import React from 'react';

import { View, StatusBar, Text } from 'react-native';

import style from './styles';

const Header = ({ title }) => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={style.title}>{title}</Text>
  </View>
);

export default Header;
