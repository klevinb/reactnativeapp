import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({ item, onHandlePress }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <AntDesign name="closecircle" size={18} color="#333" onPress={() => onHandlePress(item.key)} />
        <Text style={styles.itemText}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
});

export default TodoItem;