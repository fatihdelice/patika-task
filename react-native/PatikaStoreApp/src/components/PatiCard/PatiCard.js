import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './PatiCard.style';

const PatiCard = ({ products }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: products.imgURL }}
            />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                {!products.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
            </View>
        </View>
    );
}

export default PatiCard;
