import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text } from 'react-native';

import style from './styles';

export default class FilterOptions extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    optionsList: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.string,
      }),
    ).isRequired,
    initialValue: PropTypes.string.isRequired,
  };

  state = {
    selected: '',
  };

  componentDidMount() {
    const { initialValue } = this.props;
    this.setState({ selected: initialValue });
  }

  clickButton = (value) => {
    const { onChange } = this.props;
    this.setState({ selected: value });
    onChange(value);
  };

  render() {
    const { optionsList } = this.props;
    const { selected } = this.state;
    return (
      <View style={style.container}>
        {optionsList.map(option => (
          <TouchableOpacity
            key={option.value}
            style={style.button}
            onPress={() => this.clickButton(option.value)}
            value
          >
            <Text style={[style.textButton, selected === option.value && style.selectOption]}>
              {option.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
