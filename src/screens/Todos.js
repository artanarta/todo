import axios from 'axios';
import { Center, Heading, VStack } from 'native-base';
import React from 'react';
import InputData from '../components/InputData';
import Contents from '../components/Contents';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [contentValue, setContentValue] = React.useState('');
  const navigation = useNavigation();

  const getAllIdTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('http://192.168.1.4:4000/api/v1/todos');
      setTodos(res.data.data);
      setIsLoading(false);
    } 
    catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const postIdTodo = async () => {
    try {
      const res = await axios.post('http://192.168.1.4:4000/api/v1/todo', {
        title: inputValue, content : contentValue, status : "uncompleted"
      });
      getAllIdTodos();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const deleteIdTodo = async (todo) => {
    try {
      const { id } = todo;
      const res = await axios.delete(`http://192.168.1.4:4000/api/v1/todo/${id}`);
      getAllIdTodos();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus", () => { getAllIdTodos(); 
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView >
    <Center>
      <VStack space={4} w="90%">
        <Heading style={{marginTop:60, marginBottom:2,  fontWeight: "bold"}}>Insert Todo</Heading>
        <InputData value={inputValue} setValue={setInputValue}  contentValue={contentValue}  setAnotherValue={setContentValue}  postIdTodo={postIdTodo} />
        
        <Heading>List todo</Heading>
           <Contents
            deleteIdTodo={deleteIdTodo}
            getAllIdTodos={getAllIdTodos}
            todos={todos}
            isLoading={isLoading}/>    
      
      </VStack>
    </Center>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
 
});

export default Todos;
