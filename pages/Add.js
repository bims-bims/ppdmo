import { Button } from 'react-native-paper';
import { View, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Add() {
    const navigation = useNavigation(); // Gunakan hook navigasi
  const dashBoard = () =>{
    navigation.navigate('Dashboard')
  }

  return (
    <View style={style.container}>

       <Text>Haloo Add Data</Text>
     <View style={{marginTop:92 }}>
     <Button style={{width:285, height:43, backgroundColor:'#00A3FF'}} mode="contained" onPress={() => dashBoard()}>
       READ NOW
      </Button>
     </View>
      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default Add;