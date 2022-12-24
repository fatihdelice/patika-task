import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../redux/job/jobSlice'

import styles from './JobCard.style';



const JobCard = ({ item, isRemoveBtn }) => {
    const dispatch = useDispatch();
    
    const removeItem = (id) => {
        dispatch(removeFavorite(id))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.category_name}>{item.categories[0].name}{/*  - {item.id} */}</Text>
            <Text style={styles.company}>{item.company.name}</Text>
            <Text style={styles.location}>{item.locations[0].name}</Text>
            <Text style={styles.level}>{item.levels[0].name}</Text>
            {
                isRemoveBtn && (
                    <TouchableOpacity style={styles.remove_btn_container} onPress={() => removeItem(item.id)}>
                        <Text style={styles.removeBtn}>Remove</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default JobCard