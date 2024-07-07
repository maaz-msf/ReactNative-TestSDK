import { View, Text, Button, Alert, StyleSheet } from "react-native";
import Modal from 'react-native-modal';
function successDialog(title, msg) {
    Alert.alert(
        title,
        msg,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
    );
}
function failureDialog(title, msg, extraBtn) {
    Alert.alert(
        title,
        msg,
        [
            extraBtn ? { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') } : null,
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )
}

const MyModal = ({ isVisible, toggleModal }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal} onBackButtonPress={toggleModal}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Hello, this is a beautiful modal!</Text>
        <Button title="Close" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export { successDialog, failureDialog, MyModal }