import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  listIssues: {
    padding: metrics.basePadding,
  },
  loading: {
    padding: metrics.basePadding,
  },
  textError: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.danger,
    paddingTop: metrics.basePadding,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.regular,
    justifyContent: 'center',
  },
  emptyIcon: {
    color: colors.regular,
    paddingHorizontal: metrics.basePadding,
  },
});
export default styles;
