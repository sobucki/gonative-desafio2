import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
    textAlign: 'center',
    // flex: 1,
  },
  back: {
    color: colors.regular,
  },
  boxButton: {
    width: 30,
  },
  button: {
    padding: metrics.basePadding,
  },
});
export default styles;
