import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../global/constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#283f52',
    height: SCREEN_HEIGHT,
  },
  pdfView: {
    width: SCREEN_WIDTH,
    height: (SCREEN_HEIGHT * 3) / 5,
  },
  logoHome: {
    width: 56,
    height: 42,
    marginTop: 70,
    flexShrink: 0,
    borderRadius: 5,
    marginBottom: 50,
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
  },
  logoPrevious: {
    width: 30,
    height: 40,
    flexShrink: 0,
    borderRadius: 5,
  },
  logoNext: {
    width: 30,
    height: 40,
    flexShrink: 0,
    borderRadius: 5,
  },
  logoFirst: {
    width: 56,
    height: 42,
    flexShrink: 0,
    borderRadius: 5,
  },
});
