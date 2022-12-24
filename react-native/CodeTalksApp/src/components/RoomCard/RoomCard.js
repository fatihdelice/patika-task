import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './RoomCard.style';

const RoomCard = ({ name }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>{name.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;
