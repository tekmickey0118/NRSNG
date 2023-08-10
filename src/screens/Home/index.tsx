import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Linking,
  LogBox,
} from 'react-native';

import axios from 'axios';

import CheckBox from 'react-native-check-box';
import SafeAreaContainerView from '../../components/containers/SafeAreaContainerView';
import Button from '../../components/forms/Button';
import {validateForm} from '../../validation';

import {styles as globalStyles} from './style';
import {styles as modalStyles} from './style/modal';

export const HomeScreen = (): JSX.Element => {
  let accessToken = 'pat-na1-a59ebb9a-6abf-4a6a-b584-594085f94c37';

  const header = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
  ]);

  const openURL = () => {
    const url = 'https://google.com'; // Replace with your desired URL

    Linking.openURL(url)
      .then(() => {
        console.log('URL opened successfully');
      })
      .catch(error => {
        console.log('Error opening URL:', error);
      });
  };

  return (
    <SafeAreaContainerView>
      <ScrollView>
        <View style={globalStyles.container}>
          <View style={globalStyles.sub_container_top}>
            <View style={globalStyles.wrap_container}>
              <Image
                source={require('../../assets/images/preview.png')}
                style={globalStyles.preview}
              />
              <Button
                onPressOut={() => setModalVisible(true)}
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
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <TouchableOpacity
                  style={modalStyles.container}
                  activeOpacity={1}
                  onPressOut={() => setModalVisible(!modalVisible)}>
                  <View style={modalStyles.centeredView}>
                    {isLoading ? (
                      <ActivityIndicator
                        size="large"
                        color="#ffffff"
                        animating={isLoading}
                      />
                    ) : (
                      <View style={modalStyles.modalView}>
                        <Text style={modalStyles.modalText}>
                          Enter Email Address To Open
                        </Text>
                        <Image
                          source={require('../../assets/images/notes_logo.png')}
                          style={modalStyles.modal_logo}
                        />
                        <TextInput
                          style={modalStyles.input}
                          placeholder="First name"
                          onChangeText={value => setFirstName(value)}
                        />
                        <TextInput
                          style={modalStyles.input}
                          placeholder="Email"
                          onChangeText={value => setEmail(value)}
                        />
                        <View style={modalStyles.wrapper}>
                          <CheckBox
                            onClick={() => {
                              setIsChecked(!isChecked);
                            }}
                            checkBoxColor="#283652"
                            isChecked={isChecked}
                          />
                          <Text style={modalStyles.contentText}>
                            I agree to receive other communications from
                            NRUSING.com. View terms of use.*
                          </Text>
                        </View>
                        <Button
                          onPress={() => {
                            let val_stats = validateForm(email, firstName);

                            const data = {
                              properties: {
                                email: email,
                                firstname: firstName,
                              },
                            };

                            if (val_stats.status === 200) {
                              setIsLoading(!isLoading);
                              axios
                                .post(
                                  'https://api.hubapi.com/crm/v3/objects/contacts',
                                  data,
                                  header,
                                )
                                .then(() => {
                                  setModalVisible(!modalVisible);
                                })
                                .catch(() => {
                                  Alert.alert(
                                    'Error',
                                    'There are some problems in Server',
                                  );
                                });
                            } else {
                              Alert.alert('Warning', val_stats.message);
                            }
                          }}
                          style={modalStyles.modal_button}
                          title="Start Reading"
                        />
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              </Modal>

              <Image
                source={require('../../assets/images/logo.png')}
                style={globalStyles.logo}
              />
              <Text style={globalStyles.text1}>Now Available</Text>
              <Text style={globalStyles.text2}>
                NURSING.com Free Access - take your study on the go watch 10
                FREE minutes of our clear and concise videos each day
              </Text>
              <Button
                style={globalStyles.button}
                onPress={() => openURL()}
                title="Create Free Account"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};
