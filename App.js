import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home.js';
import HomeStack from './src/navigations/StackNavigators'

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Home />
    // </View>
    <HomeStack/>
  );
}

export default App


