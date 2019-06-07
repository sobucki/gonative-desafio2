import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infosContainer: {
    padding: metrics.basePadding,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  user: {
    fontSize: 14,
    color: colors.regular,
  },
  iconNext: {
    color: colors.regular,
  },
});
export default styles;
