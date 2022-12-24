import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput
} from 'react-native';
import data from './pati_data.json';
import PatiCard from './components/PatiCard';


function App() {

  const renderPati = ({ item }) => <PatiCard products={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerText}>PATIKASTORE</Text>
        <TextInput
          style={styles.searchInput}
          inlineImageLeft='search_icon'
          placeholder='Ara...'
        />
      </View>
      <FlatList
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={renderPati}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 5,
  },
  headerArea: {
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#800080',
    textAlign: 'left',
  },
  searchInput: {
    backgroundColor: '#eceff1',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
  }
});

export default App;
