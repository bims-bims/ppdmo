import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';


function Dashboard({ navigation }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State untuk loading

  const getData = async () => {
    try {
      const res = await axios.get('https://pedimo-7bfa2-default-rtdb.asia-southeast1.firebasedatabase.app/hukum.json?auth=ENrcbU4VBwNH3MbCu9sH4tM70opVmbcM55Pl4wVT');
      const dataArray = Object.values(res.data);
      setData(dataArray);
      setFilteredData(dataArray);
      setIsLoading(false); // Setelah data diambil, matikan loading
    } catch (error) {
      alert(error.message);
      setIsLoading(false); // Matikan loading jika terjadi error
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (text) => {
    const filtered = data.filter(item =>
      item.judul.toLowerCase().includes(text.toLowerCase()) ||
      item.subjudul.toLowerCase().includes(text.toLowerCase())
    );
    setSearchText(text);
    setFilteredData(filtered);
  }

  const renderItem = ({ item, index }) => (
    <Card.Title
      key={index}
      title={item.judul}
      subtitle={item.subjudul}
      left={(props) => <Avatar.Icon style={{ backgroundColor: "#00A3FF" }} {...props} icon="notebook" />}
      right={(props) => <IconButton {...props} icon="arrow-right-circle" onPress={() => navigation.navigate('Detail', { data: item })} />}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        elevation={3}
        style={styles.searchInput}
        placeholder="Search Pasal"
        value={searchText}
        onChangeText={handleSearch}
      />
      {isLoading ? ( // Tampilkan loading jika isLoading true
        <ActivityIndicator size="large" color="#00A3FF" style={{ marginTop: 20 }} />
      ) : (
        <Card style={{ backgroundColor: 'white', height: 520 }} elevation={2}>
          <Card.Content >
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </Card.Content>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  searchInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'white',
  },
});

export default Dashboard;
