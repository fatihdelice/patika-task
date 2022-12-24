import React from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import styles from './Meals.style'
import { API_URL } from "@env"
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealCard from '../../components/MealCard';

const Meals = ({ route, navigation }) => {
  const { strCategory } = route.params;
  const { loading, data, error } = useFetch(`${API_URL}/filter.php?i=${strCategory}`);

  const handleCategorySelect = idMeal => {
    navigation.navigate('DetailsPage', { idMeal });
  }

  const renderMeal = ({ item }) => (
    <MealCard
      meal={item}
      onSelect={() => handleCategorySelect(item.idMeal)}
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
        keyExtractor={(item) => item.idMeal}
        data={data.meals}
        renderItem={renderMeal}
      />
    </SafeAreaView>
  )
}

export default Meals

