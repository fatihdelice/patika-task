import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { changeJob } from '../../redux/job/jobSlice'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading'
import JobCard from '../../components/JobCard'
import { config } from '../../config'
import styles from './Home.style'

function Home({ navigation }) {
    const { data, error, loading } = useFetch(config.API_URL);
    const dispatch = useDispatch();

    if (error) {
        <Text>Bir hata oluştu!</Text> 
    }

    function handleSelect(id, name) {
        navigation.navigate("DetailScreen", { id })
        dispatch(changeJob(name))
    }


    function renderJobs({ item }) {
        return <TouchableOpacity onPress={() => handleSelect(item.id, item.categories[0].name)}>
            <JobCard item={item} />
        </TouchableOpacity>
    }

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={styles.header}>Jobs</Text>
            </View>
            {
                loading ? (<Loading />) : (<FlatList style={{ marginTop: 5 }} data={data.results} renderItem={renderJobs} />)
            }
        </View>
    )
}

export default Home