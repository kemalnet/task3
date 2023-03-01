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
import { ItemContext } from '../context/ItemContext';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { updateItem } = useContext(ItemContext);
  const [itemName, setItemName] = useState(item.name);

  const handleNameChange = () => {
    updateItem(item.id, itemName);

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
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={itemName}
        onChangeText={setItemName}
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
