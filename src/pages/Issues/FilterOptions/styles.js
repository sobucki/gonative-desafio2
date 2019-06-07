import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    height: 40,
    backgroundColor: colors.light,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  textButton: {
    color: colors.regular,
    textAlign: 'center',
  },
  selectOption: {
    fontWeight: 'bold',
  },
});
export default styles;
