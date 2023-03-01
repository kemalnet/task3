import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductProvider from './src/context/ProductContext';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
// import DetailScreen from './src/screens/DetailScreen';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>

//     // <HomeScreen />
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
