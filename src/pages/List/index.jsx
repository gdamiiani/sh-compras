import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import AddItem from '../../components/AddItem';
import ListItem from '../../components/ListItem';

import getId from '../../utils/getId';

import styles from './styles';

function List() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    if (text === '') {
      Alert.alert('Erro', 'Por favor digite um item!', [{ text: 'OK' }]);
    } else {
      setItems((prevItems) => [{ id: getId(), text }, ...prevItems]);
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header title="SH Compras" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem text={item.text} id={item.id} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={{
            fontSize: 15,
            textAlign: 'center',
            backgroundColor: '#f8f8f8',
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          }}
          >
            Comece adicionando itens a lista
          </Text>
        )}
      />
    </View>
  );
}

export default List;
