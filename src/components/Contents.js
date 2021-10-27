import { VStack,  Text, HStack } from 'native-base';
import React, { useState, useEffect } from "react";
import { FlatList, Button, ScrollView} from 'react-native';
import { ListItem } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default function Content({ getAllIdTodos, todos, deleteIdTodo }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const _renderItem = ({ item }) => {
    const updateTodoCompleted = async () => {
      setIsLoading(true);
      try {
          const response = await axios.patch(`http://192.168.1.4:4000/api/v1/todoStatus/${item.id}`, {
          status: "completed"
        });
        setIsLoading(true);
        getAllIdTodos();
      } catch (error) {
        console.log(error);
      }
    };

    const updateTodounCompleted = async () => {
      setIsLoading(true);
      try {
          const response = await axios.patch(`http://192.168.1.4:4000/api/v1/todoStatus/${item.id}`, {
          status: "uncompleted"
        });
        setIsLoading(true);
        getAllIdTodos();
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <ListItem bottomDivider style={{marginBottom:18}}>
      <VStack space={4} >
     
          <Text style={{  fontSize: 22, fontWeight: "bold", marginTop:5}}>
         
              {item.status === "completed" ? (
                <>
                  <Text style={styles.completedText} >
                    {item.title} 
                  </Text> 
                </>
              ) : (
                <>
                  <Text style={styles.unCompletedText}>
                    {item.title} 
                  </Text>
                </>
              )}
           
           <TouchableOpacity onPress={() => { updateTodoCompleted()}}>
                  <Ionicons name="ios-checkmark-circle" color="blue" size={28}  style={{marginLeft:15}} />
           </TouchableOpacity> 
           <TouchableOpacity onPress={() => { updateTodounCompleted()}}>
                <Ionicons name="close-circle" color="blue" size={28}  style={{marginLeft:5}} />
           </TouchableOpacity>
         
          </Text> 
        
          
          
          <Text style={{ fontSize: 18, marginBottom:10}}>
           {item.content} 
          </Text>
              <HStack space={4} style={{ fontSize: 18, marginBottom:15}} >
                  <Button  title="Update" color="blue" onPress={() => navigation.navigate("Detail", item)}/>
                  <Button  title="Delete" color="red" onPress={() => {deleteIdTodo(item) }}/>
              </HStack>
      </VStack>
      </ListItem>
 
    );
  };

  const styles = StyleSheet.create({
   
    completedText: {
      textDecorationLine: "line-through",
      fontSize: 22,
      fontWeight: "bold",
      color: "#bdbdbd",
     
    },
    unCompletedText: {
      fontSize: 22,
      fontWeight: "bold",
      color: "red",
  
    },
  });

  return (
    <FlatList
      data={todos}
      renderItem={_renderItem}
    />
  );
}
