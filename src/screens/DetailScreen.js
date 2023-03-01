import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ToastAndroid,
} from 'react-native';
import { ProductContext } from '../context/ProductContext';

const DetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { updateProduct } = useContext(ProductContext);
  const [productName, setProductName] = useState(product.name);

  const handleNameChange = () => {
    updateProduct(product.id, productName);

    if (Platform.OS === 'android') {
      ToastAndroid.show('Item updated', ToastAndroid.SHORT);
      navigation.navigate('Home');
    } else if (Platform.OS === 'ios') {
      Alert.alert('Item updated', null, [
        {
          text: 'Go back',
          // onPress: () => navigation.goBack(),
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={productName}
        onChangeText={setProductName}
      />
      <Text style={styles.label}>Edit name</Text>
      <Button title="Save" onPress={handleNameChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: 400,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: '60%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DetailScreen;

// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Input } from 'react-native-elements';
// import { ToastAndroid } from 'react-native';

// // import products from '../../data/foxes.json';

// const DetailScreen = ({ route, navigation }) => {
//   const { product } = route.params;
//   const [name, setName] = useState(product.name);

//   //added new
//   const [products, setProducts] = useState(require('../../data/foxes.json'));

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleSave = () => {
//     const updatedProduct = { ...product, name };
//     const updatedProducts = products.map((p) =>
//       p.id === updatedProduct.id ? updatedProduct : p
//     );
//     setProducts(updatedProducts);
//     ToastAndroid.show('Product updated', ToastAndroid.SHORT);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/images/fox1.jpg')}
//         // source={require(`./assets/images/${product.image}`)}
//         style={styles.image}
//       />
//       <Input
//         value={name}
//         onChangeText={handleNameChange}
//         label="Product Name"
//       />
//       <TouchableOpacity onPress={handleSave} style={styles.button}>
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//   },
// });

// export default DetailScreen;
