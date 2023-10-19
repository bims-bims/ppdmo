import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
// import screen
import Dashboard from './pages/Dashboard';
import Onscreen from './pages/Onscreen';
import Detail from './pages/Detail';
import Add from './pages/Add';

// create a component
const App = () => {
 
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
    <SafeAreaProvider style={styles.container}>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Onscreen" component={Onscreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerShown: true }}/>
      <Stack.Screen name="Detail" component={Detail}  options={{ headerShown: true }}/>
      <Stack.Screen name="Add" component={Add}  options={{ headerShown: true }}/>
      </Stack.Navigator>
     </NavigationContainer>
    </SafeAreaProvider>
    </PaperProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

//make this component available to the app
export default App;