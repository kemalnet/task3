import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ToastAndroid,
  Platform,
  ActionSheetIOS,
  TouchableOpacity,
} from 'react-native';
import { ItemContext } from '../context/ItemContext';
import { useNavigation } from '@react-navigation/native';

const AddItemModal = ({ onClose }) => {
  const [name, setName] = useState('');

  const [selectedImage, setSelectedImage] = useState('fox0.jpg');
  const images = [
    'fox1.jpg',
    'fox2.jpg',
    'fox3.jpg',
    'fox4.jpg',
    'fox5.jpg',
    'fox6.jpg',
    'fox7.jpg',
  ];

  const { addItem } = useContext(ItemContext);
  const navigation = useNavigation();

  function makeid(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const handleAddItem = () => {
    if (name && selectedImage) {
      addItem({ id: makeid(7), name, image: selectedImage });

      if (Platform.OS === 'android') {
        ToastAndroid.show('Item added', ToastAndroid.SHORT);
      } else if (Platform.OS === 'ios') {
        Alert.alert('Item added', null, [
          {
            text: 'Go to Home',
            onPress: () => navigation.navigate('Home'),
            // onPress: () => navigation.goBack(),
          },
        ]);
      }

      onClose();
    }
  };

  const renderDropdown = () => {
    if (Platform.OS === 'android') {
      return (
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Image name"
          onChangeText={(text) => setSelectedImage(text)}
        />

        // <Picker
        //   selectedValue={selectedImage}
        //   onValueChange={(itemValue, itemIndex) => setSelectedImage(itemValue)}
        // >
        //   {images.map((image) => (
        //     <Picker.Item key={image} label={image} value={image} />
        //   ))}
        // </Picker>
      );
    } else if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity onPress={() => showActionSheet()}>
          <Text style={styles.label2}>{selectedImage}</Text>
        </TouchableOpacity>
      );
    }
  };

  const showActionSheet = () => {
    const options = images;
    const cancelButtonIndex = options.length;
    // const cancelButtonIndex = options.length - 1;

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex !== cancelButtonIndex) {
          setSelectedImage(options[buttonIndex]);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Item name"
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>
        Select the Image name from: fox0.jpg to fox7.jpg
      </Text>
      {renderDropdown()}
      <View style={styles.buttons}>
        <Button title="Cancel" onPress={onClose} />
        <Button title="Add" onPress={handleAddItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default AddItemModal;
