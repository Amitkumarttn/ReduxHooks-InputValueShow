import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addValue} from '../redux/action/Task'

const Home = () => {
  const dispatch = useDispatch();
  const submitTask = task => dispatch(addValue(task));
  const test = useSelector(state => state.taskVal.text);
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text>{test}</Text>
      <TextInput
        placeholder="Enter value"
        value={value}
        onChangeText={text => setValue(text)}
      />
      <Button title="Press" onPress={() => submitTask(value)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
