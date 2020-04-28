import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

function AddItem({ addItem }) {
  const [text, setText] = useState('');
  let textInput = '';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar item"
        onChangeText={(t) => setText(t)}
        ref={(input) => { textInput = input; }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          textInput.clear();
          setText('');
        }}
      >
        <Text style={styles.btnText}>Adicionar</Text>
        <FontAwesome
          name="plus"
          size={20}
          color="#483d8b"
        />
      </TouchableOpacity>
    </View>
  );
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
