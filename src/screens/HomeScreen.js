import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  Modal,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { ItemContext } from '../context/ItemContext';
import AddItemModal from '../components/AddItemModal';

const HomeScreen = ({ navigation }) => {
  const { items, addItem } = useContext(ItemContext);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { item: item })}
    >
      <ListItem bottomDivider topDivider>
        <Image source={item.image} style={styles.image} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <AddItemModal onClose={() => setModalVisible(false)} />
      </Modal>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Foxes Items</Text>
        <Button title="Add" onPress={() => setModalVisible(true)} />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  list: {
    flex: 1,
    width: '100%',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
