import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import styles from './Categories.style';
import { API_URL } from "@env"
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({ navigation }) => {
    const { loading, data, error } = useFetch(`${API_URL}/categories.php`);

    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsPage', { strCategory });
    }

    const renderCategory = ({ item }) => (
        <CategoryCard
            categories={item}
            onSelect={() => handleCategorySelect(item.strCategory)}
        />
    );

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.idCategory}
                data={data.categories}
                renderItem={renderCategory}
            />
        </SafeAreaView>
    );
}

export default Categories;
