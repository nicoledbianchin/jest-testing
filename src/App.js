import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title} testID={'rectangleLengthText'}>Length</Text>
      <TextInput style={styles.input} testID={'rectangleLengthInput'}/>
    </View>
    <View style={styles.container}>
      <Text style={styles.title} testID={'rectangleWidthText'}>Width</Text>
      <TextInput style={styles.input} testID={'rectangleWidthInput'}/>
    </View>
    <Button style={styles.button} title="CALCULATE" testID={'rectangleCalculateButton'}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 60,
    marginHorizontal: 60
  },
  input: {
    borderColor: Colors.blue,
    borderWidth: 1,
    marginTop: 66,
    marginRight: 60,
    width: 100,
    height: 20
  },
});

export default App;
