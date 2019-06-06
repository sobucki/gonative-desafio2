import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  repoItem: {
    // width: 100,
    height: 100,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
  },
  logo: {
    height: 45,
    width: 45,
  },
  infoRepo: {
    margin: metrics.baseMargin,
    flex: 1,
  },
  nameRepo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameOrg: {
    fontSize: 14,
  },
  iconNext: {
    color: colors.regular,
  },
});
export default styles;
