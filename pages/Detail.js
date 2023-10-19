import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';

const Detail = ({ route, navigation }) => (


  <ScrollView contentContainerStyle={styles.container}>
    <Card style={{ backgroundColor: "white", marginHorizontal: 20, marginTop: 30 }}>
      {console.log(route.params.data)}
      <Card.Content>
        <Text style={{marginTop: 20, textAlign: "center"}} variant="titleLarge">{route.params.data.judul}</Text>
        <Text style={{textAlign: "center"}} variant="titleMedium">{route.params.data.subjudul}</Text>
        <Text style={{textAlign: "left" }} variant="labelMedium">
          {route.params.data.konten}
        </Text>
      </Card.Content>
    </Card>

  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 26,
  },
});

export default Detail;
