import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SearchRepos from '~/pages/SearchRepos';
import Issues from '~/pages/Issues';

// import { Container } from './styles';

const Routes = () => createAppContainer(
  createSwitchNavigator({
    SearchRepos,
    Issues,
  }),
);

export default Routes;
