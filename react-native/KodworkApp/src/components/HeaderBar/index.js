import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { useSelector } from 'react-redux';

function HeaderBar() {
    const { selectedJob } = useSelector(state => state.job)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`${selectedJob ? selectedJob : ''}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        color: colors.mainPink,
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default HeaderBar