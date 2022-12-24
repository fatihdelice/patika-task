import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Button.style'

const Button = ({ buttonText, iconName, size = 17, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.button_text}><Icon name={iconName} size={size} /> {buttonText}</Text>
        </TouchableOpacity>
    )
}



export default Button