import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SearchRepos from '~/pages/SearchRepos';

// import { Container } from './styles';

const Routes = () => createAppContainer(
  createSwitchNavigator({
    SearchRepos,
  }),
);

export default Routes;
