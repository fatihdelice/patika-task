import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "./DetailCard.style";

const DetailCard = ({ detail, openYoutube }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
            <Text style={styles.title}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <View style={styles.line} />
            <Text style={styles.instruction}>{detail.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={openYoutube}>
                <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailCard;