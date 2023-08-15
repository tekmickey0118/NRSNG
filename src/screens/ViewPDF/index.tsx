/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity, Alert, Linking} from 'react-native';
import PDF from 'react-native-pdf';

import {RootStackParamList} from '../../global/Type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './style';

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
      console.log(pdfRef.numPages);
      setPageNum(pageNum + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pdfRef && pdfRef.current && pageNum) {
      if (pageNum > 1) {
        pdfRef.current.setPage(pageNum - 1); // Go to the first page for previous button
        setPageNum(pageNum - 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/images/top.png')}
            style={styles.logoHome}
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
          Linking.openURL(uri)
            .then(() => {
              console.log('URL opened successfully');
            })
            .catch(error => {
              console.log('Error opening URL:', error);
            });
        }}
      />
      <View style={styles.bottomWrapper}>
        <TouchableOpacity onPress={goToPreviousPage}>
          <Image
            source={require('../../assets/images/left_arrow.png')}
            style={styles.logoPrevious}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToPage()}>
          <Image
            source={require('../../assets/images/center.png')}
            style={styles.logoFirst}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextPage}>
          <Image
            source={require('../../assets/images/right_arrow.png')}
            style={styles.logoNext}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
