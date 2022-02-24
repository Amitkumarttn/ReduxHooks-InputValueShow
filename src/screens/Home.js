import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addValue} from '../redux/action/InputValue';

const Home = () => {
  const text = useSelector(state => state.inputVal.value);
  const dispatch = useDispatch();
  const submitTask = task => dispatch(addValue(task));
  const [value, setValue] = useState('');
  return (
    <View>
      <Text>{text}</Text>
      <TextInput
        placeholder="Enter something"
        value={value}
        onChangeText={text => setValue(text)}
      />
      <Button title="Press" onPress={() => submitTask(value)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
