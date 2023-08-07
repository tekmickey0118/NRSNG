import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from './constants';

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#eba417',
    primaryLight: '#ffdb77',
    secondary: '#79c7ff',
    success: '#12a454',
    danger: '#e83f5b',
    dark: '#121214',
    light: '#f1f1f1',
    gray500: '#a8a8b3',
    gray800: '#29292e',
  },
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: SCREEN_HEIGHT,
  },
  sub_container_top: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.58,
    alignItems: 'center',
    backgroundColor: '#5c8db3',
  },
  sub_container_bottom: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.65,
  },
  preview: {
    width: SCREEN_WIDTH * 0.65,
    height: 320,
    marginTop: 50,
    flexShrink: 0,
    borderRadius: 5,
  },
  logo: {
    width: 140,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    flexShrink: 0,
  },
  modal_logo: {
    width: 170,
    height: 40,
    objectFit: 'contain',
    flexShrink: 0,
  },
  button: {
    width: '100%',
    marginTop: 30,
  },
  text1: {
    color: '#283652',
    fontSize: 20,
    fontWeight: '600',
  },
  text2: {
    color: '#283652',
    textAlign: 'center',
    fontWeight: '200',
  },
});
