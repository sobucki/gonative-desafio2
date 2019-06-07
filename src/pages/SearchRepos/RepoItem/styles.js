import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  repoItem: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
  },
  logo: {
    height: 50,
    width: 50,
  },
  infoRepo: {
    padding: metrics.basePadding,
    flex: 1,
  },
  nameRepo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameOrg: {
    fontSize: 14,
    color: colors.regular,
  },
  iconNext: {
    color: colors.regular,
  },
});
export default styles;
