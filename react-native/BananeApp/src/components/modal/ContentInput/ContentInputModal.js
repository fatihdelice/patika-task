import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ContentInputModal.style';
import Button from '../../Button';
import Modal from 'react-native-modal';

const ContentInputModal = ({visible, onSend, onClose}) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText("");
  };

  return (
    <Modal
      swipeDirection="down"
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Darla hadi milleti..."
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
