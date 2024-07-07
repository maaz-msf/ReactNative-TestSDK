/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MyModal } from './Helper/Utils';

const App = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Show Modal" onPress={toggleModal} />
        <MyModal isVisible={isModalVisible} toggleModal={toggleModal} />
      </View>
    );
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
