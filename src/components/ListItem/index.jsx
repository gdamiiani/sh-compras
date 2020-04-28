import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

function ListItem({ text, id, deleteItem }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.input} onPress={() => deleteItem(id)}>
          <FontAwesome
            name="remove"
            size={20}
            color="#282828"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ListItem;
