import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  form: {
    alignItems: 'center',
    padding: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    // height: 44,
    flex: 1,
    // marginHorizontal: metrics.baseMargin,
    textAlign: 'center',
  },
  icon: {
    color: colors.darker,
    // paddingRight: metrics.baseMargin,
    // flex: 1,
    alignItems: 'center',
  },
  buttonPlus: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  //= ================
  listView: {
    padding: metrics.basePadding,
  },
  textError: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.danger,
    paddingTop: metrics.basePadding,
  },
  loadList: {
    padding: metrics.basePadding,
  },
});
export default styles;
