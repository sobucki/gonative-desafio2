import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import React, { Component } from 'react';

// import { View, Text } from 'react-native';

import createNavigator from './routes';

// import { Container } from './styles';

export default class App extends Component {
  state = {};

  render() {
    const Routes = createNavigator();
    return <Routes />;
  }
}
