import React from 'react'
import { View, Text, Image, FlatList, Linking, Alert } from 'react-native'
import styles from './Details.style'
import { API_URL } from "@env"
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';

const Details = ({ route }) => {
  const { idMeal } = route.params;
  const { loading, data, error } = useFetch(`${API_URL}/lookup.php?i=${idMeal}`);


  const goToYoutube = (url) => {
    try {
      Linking.openURL(url);
    }
    catch {
      Alert.alert("No video!");
    }
  }

  const renderDetail = ({ item }) => (
    <DetailCard
      detail={item}
      openYoutube={() => goToYoutube(item.strYoutube)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderDetail}
      />
    </View>
  )
}

export default Details

