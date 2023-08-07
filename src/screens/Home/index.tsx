import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import SafeAreaContainerView from '../../components/containers/SafeAreaContainerView';
import {RootStackParamList} from '../../global/Type';
import {styles as globalStyles} from '../../global/styles';
import Button from '../../components/forms/Button';
import {SCREEN_WIDTH} from '../../global/constants';

type Props = NativeStackScreenProps<RootStackParamList>;

export const HomeScreen = ({navigation}: Props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaContainerView>
      <View style={globalStyles.container}>
        <View style={globalStyles.sub_container_top}>
          <View style={globalStyles.wrap_container}>
            <Image
              source={require('../../assets/images/preview.png')}
              style={globalStyles.preview}
            />
            <Button
              onPressOut={() => navigation.navigate('')}
              style={globalStyles.button}
              title="Start Reading"
            />
          </View>
        </View>
        <View style={globalStyles.sub_container_bottom}>
          <View style={globalStyles.wrap_container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              presentationStyle="overFullScreen"
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <TouchableOpacity
                style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                activeOpacity={1}
                onPressOut={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      Enter Email Address To Open
                    </Text>
                    <Image
                      source={require('../../assets/images/notes_logo.png')}
                      style={styles.modal_logo}
                    />
                    <TextInput style={styles.input} placeholder="First name" />
                    <TextInput style={styles.input} placeholder="Email" />
                    <View
                      style={{
                        width: 245,
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <CheckBox
                        onClick={() => {
                          setIsChecked(!isChecked);
                        }}
                        checkBoxColor="#283652"
                        isChecked={isChecked}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                          flexShrink: 1,
                          fontSize: 11,
                          color: '#283652',
                        }}>
                        I agree to receive other communications from
                        NRUSING.com. View terms of use.*
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>

            <Image
              source={require('../../assets/images/logo.png')}
              style={globalStyles.logo}
            />
            <Text style={globalStyles.text1}>Now Available</Text>
            <Text style={globalStyles.text2}>
              NURSING.com Free Access - take your study on the go watch 10 FREE
              minutes of our clear and concise videos each day
            </Text>
            <Button
              style={globalStyles.button}
              onPress={() => setModalVisible(true)}
              title="Create Free Account"
            />
          </View>
        </View>
      </View>
    </SafeAreaContainerView>
  );
};

const styles = StyleSheet.create({
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
});
