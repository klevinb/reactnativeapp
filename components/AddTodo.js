import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const AddTodo = ({ submitHandler }) => {
  const [todo, setTodo] = useState('');
  const changeHanlder = (newTodo) => {
    setTodo(newTodo);
  }

  const onHandleAdd = () => {
    if (todo?.length && todo.length > 3) {
      setTodo('');
      return submitHandler(todo);
    }
    Alert.alert('OOPS!', 'Todo should be at least 4 chars long!');
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New to-do..."
        onChangeText={(val) => changeHanlder(val)}
        value={todo}
      />
      <Button
        title="Add Todo"
        onPress={onHandleAdd}
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
});

export default AddTodo;