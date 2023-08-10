import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../global/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  wrapper: {
    width: 245,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: 240,
    height: 40,
    margin: 3,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#283652',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 20,
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentText: {
    marginLeft: 5,
    flexShrink: 1,
    fontSize: 11,
    color: '#283652',
  },
  modalText: {
    textAlign: 'justify',
    fontSize: 23,
    fontWeight: '500',
    color: '#283652',
  },
  modal_logo: {
    width: 170,
    height: 40,
    objectFit: 'contain',
    flexShrink: 0,
    marginBottom: 5,
  },
  modal_button: {
    width: '75%',
    marginTop: 20,
  },
});
