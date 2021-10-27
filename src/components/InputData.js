import {Input, Text, Button, HStack, VStack, TextArea } from 'native-base';
import React from 'react';

export default function InputData({ postIdTodo, setValue, setAnotherValue, value, contentValue }) {
  const [error, setError] = React.useState(false);
  const [error2, setError2] = React.useState(false);

  const handleClick = () => {
    if (value.length <= 0) {
      setError(true);
      setError2(false);
    } else if  (contentValue.length <= 0) {
      setError2(true);
      setError(false);
    } else {
      postIdTodo();
      setError(false);
      setError2(false);
    }
  };

  return (
    <VStack space={4}>
      <Input
        style={{ fontSize: 20, marginBottom:10, borderRadius:5, borderColor:"#8f949c", fontWeight:"500"}}
        onChangeText={(v) => setValue(v)}
        value={value}
        placeholder="Add Title Here" />
      {error && <Text style={{ color: 'red' }}>  Please Input Title! </Text>} 
      <TextArea
        style={{ fontSize: 20, marginBottom:8, borderRadius:5, borderColor:"#8f949c", fontWeight:"500"}}
        onChangeText={(v) => setAnotherValue(v)}
        value={contentValue}
        placeholder="Add Content Here"/>
      {error2 && <Text style={{ color: 'red' }}>  Please Input Content!</Text>}
      <Button
       title="Press me"
       style={{ fontSize: 20, marginBottom:10, height:45, fontSize:20}}
       onPress={handleClick}> Submit </Button>
 </VStack>
    
  );
}
