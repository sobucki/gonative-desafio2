import React from 'react';
import PropTypes from 'prop-types';

import { View, StatusBar, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles';

const Header = ({
  title, hasBackButton, hasNextButton, navigation: { navigate },
}) => (
  <View style={style.container}>
    <StatusBar barStyle="dark-content" />
    <View style={style.boxButton}>
      {hasBackButton && (
        <Icon
          name="chevron-left"
          size={22}
          style={style.back}
          onPress={() => navigate('SearchRepos')}
        />
      )}
    </View>

    <Text style={style.title}>{title}</Text>

    <View style={style.boxButton}>
      {hasNextButton && (
        <Icon show={false} name="chevron-right" size={22} style={style.back} onPress={() => {}} />
      )}
    </View>
  </View>
);

Header.defaultProps = {
  title: '',
  hasBackButton: false,
  hasNextButton: false,
};

Header.propTypes = {
  title: PropTypes.string,
  hasBackButton: PropTypes.bool,
  hasNextButton: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
