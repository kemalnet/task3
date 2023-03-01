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
import { ProductContext } from '../context/ProductContext';
import AddProductModal from './AddProductModal';

const HomeScreen = ({ navigation }) => {
  const { products, addProduct } = useContext(ProductContext);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(products[0].image);
  // console.log(products[1].image);

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity
  //     style={styles.item}
  //     onPress={() => navigation.navigate('Detail', { product: item })}
  //   >
  //     <Image source={item.image} style={styles.image} />
  //     <Text style={styles.name}>{item.name}</Text>
  //   </TouchableOpacity>
  // );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { product: item })}
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
        <AddProductModal onClose={() => setModalVisible(false)} />
      </Modal>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
        <Button title="Add" onPress={() => setModalVisible(true)} />
      </View>
      <FlatList
        data={products}
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

// import React, { useState } from 'react';
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { ListItem, Input } from 'react-native-elements';

// const HomeScreen = ({ navigation }) => {
//   const [products, setProducts] = useState(require('../../data/foxes.json'));

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() =>
//         navigation.navigate('Detail', { product: item, setProducts })
//       }
//     >
//       <ListItem bottomDivider>
//         <Image
//           source={require('../../assets/images/fox1.jpg')}
//           // source={require(`../../assets/images/${item.image}`)}
//           style={styles.image}
//         />
//         <ListItem.Content>
//           <ListItem.Title>
//             {item.name} {item.image}
//           </ListItem.Title>
//         </ListItem.Content>
//         <ListItem.Chevron />
//       </ListItem>
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={products}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: 50,
//     height: 50,
//   },
// });

// export default HomeScreen;
