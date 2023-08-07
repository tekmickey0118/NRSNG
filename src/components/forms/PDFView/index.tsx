import React from 'react';
import {StyleSheet, View} from 'react-native';
import Pdf from 'react-native-pdf';

const PDFView = () => {
  return (
    <View style={styles.container}>
      <Pdf
        source={require('../../../assets/file/NCLEX.pdf')} // Replace with your PDF file URL or local file path
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default PDFView;
