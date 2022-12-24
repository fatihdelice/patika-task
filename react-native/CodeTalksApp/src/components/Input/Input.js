import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeholder, onChangeText, value, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default Input;
