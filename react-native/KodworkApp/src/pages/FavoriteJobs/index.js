import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './FavoriteJobs.style';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard';

const FavoriteJobs = () => {

    const [isRemoveBtn, setIsRemoveBtn] = React.useState(true);

    const { favoriteJobs } = useSelector(state => state.job);

    const renderJobs = ({ item }) => {
        return (
            <JobCard item={item} isRemoveBtn={isRemoveBtn} />
        )
    }
    return (
        <>
            {
                favoriteJobs.length > 0
                    ? (<FlatList data={favoriteJobs} renderItem={renderJobs} />)
                    : (
                        <View>
                            <Text style={styles.title}>You don't have any favorite job postings.</Text>
                        </View>
                    )
            }
        </>
    )
}

export default FavoriteJobs