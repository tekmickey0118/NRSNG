/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import PDF from 'react-native-pdf';

import {RootStackParamList} from '../../global/Type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../global/constants';

type Props = NativeStackScreenProps<RootStackParamList>;

export const ViewPDFScreen = ({navigation}: Props): JSX.Element => {
  const pdfRef = useRef(null);
  const [pageNum, setPageNum] = useState(1);

  const source = require('./NCLEX.pdf');

  const goToPage = () => {
    if (pdfRef && pdfRef.current) {
      pdfRef.current.setPage(1);
      setPageNum(1);
    }
  };

  const goToNextPage = () => {
    if (pdfRef && pdfRef.current) {
      pdfRef.current.setPage(pageNum + 1);
      setPageNum(pageNum + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pdfRef && pdfRef.current && pageNum) {
      pdfRef.current.setPage(pageNum - 1); // Go to the first page for previous button
      setPageNum(pageNum - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/images/top.png')}
            style={{
              width: 56,
              height: 42,
              marginTop: 70,
              flexShrink: 0,
              borderRadius: 5,
              marginBottom: 50,
            }}
          />
        </TouchableOpacity>
      </View>

      <PDF
        ref={pdfRef}
        style={styles.pdfView}
        horizontal={true}
        source={source}
        onError={error => {
          Alert.alert('Error', 'PDF File Loading Fail');
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(uri);
          Linking.openURL(uri)
            .then(() => {
              console.log('URL opened successfully');
            })
            .catch(error => {
              console.log('Error opening URL:', error);
            });
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-around',
          width: SCREEN_WIDTH,
        }}>
        <TouchableOpacity onPress={goToPreviousPage}>
          <Image
            source={require('../../assets/images/left_arrow.png')}
            style={{
              width: 30,
              height: 40,
              flexShrink: 0,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToPage()}>
          <Image
            source={require('../../assets/images/center.png')}
            style={{
              width: 56,
              height: 42,
              flexShrink: 0,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextPage}>
          <Image
            source={require('../../assets/images/right_arrow.png')}
            style={{
              width: 30,
              height: 40,
              flexShrink: 0,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#283f52',
    height: SCREEN_HEIGHT,
  },
  pdfView: {
    width: SCREEN_WIDTH,
    height: (SCREEN_HEIGHT * 3) / 5,
  },
});
