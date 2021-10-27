import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {VStack, Input, HStack, Button, TextArea } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const Detail = (props, value) => {
  const navigation = useNavigation();
  //Init Props
  const id = props.route.params.id;
  const title = props.route.params.title;
  const content = props.route.params.content;

  //Init State
  const [idTodos, setIdTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [EditTitleValue, setEditTitleValue] = React.useState('');
  const [EditContentValue, setEditContentValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [error2, setError2] = React.useState(false);

  const handleClick = () => {
    if (EditTitleValue.length <= 0 ) {
      setError(true);
      setError2(false);
    } else if  (EditContentValue.length <= 0) {
      setError2(true);
      setError(false);
    } else {
      updateTodo();
      navigation.navigate("Todos")
    }
  };

  //init LifeCycle
  useEffect(() => {
    getIdTodo();
  }, []);

  const getIdTodo = () => {
    setIsLoading(true);
    axios
      .get(`http://192.168.1.4:4000/api/v1/todo/${id}`)
      .then((res) => {
        setIdTodos(res.data);
        setIsLoading(false);
      })
      .catch((eror) => {
        alert("Error Get id");
        setIsLoading(false);
        console.log(error);
      });
  };

  const updateTodo = async () => {
    setIsLoading(true);
    try {
        const response = await axios.patch(`http://192.168.1.4:4000/api/v1/todo/${id}`, {
        title: EditTitleValue, content : EditContentValue
      });
      setIsLoading(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };


  return (
    <View style={style.container}>
      <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom:12}}>Edit Todos</Text>

      <VStack space={4}>
      <Input
       style={{ fontSize: 20, marginBottom:10}}
       onChangeText={(v) => setEditTitleValue(v)}
       value={EditTitleValue}
       placeholder={title} />
       {error && <Text style={{ color: 'red' }}> Please Input Title </Text>} 
      <TextArea
       style={{ fontSize: 20}}
       onChangeText={(v) => setEditContentValue(v)}
       value={EditContentValue}
       placeholder={content}  />
       {error2 && <Text style={{  marginBottom : 12, color: 'red' }}> Please Input Content </Text>}
 
      <Button 
       onPress={handleClick}
       height="45"> Submit </Button> 
      </VStack>
    </View>
  );
};

export default Detail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 18,
    flex: 1,
  },
});
