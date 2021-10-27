import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Calculator() {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  
  console.log(resultText, "resultText")
  console.log(calcText, "calcText")

  const onButtonClick = (text) => {
    //show clicked button on calculation text
    if (text == "=") {
      return calculateResult();
    }
    setResultText(resultText + text);
  };

  // result text 
  const calculateResult = () => {
    setCalcText(eval(resultText));
  };

  const onOperationClick = (operation) => {
    let operations = [ "+", "-", "*", "/", "%"];
    if (operations.includes(resultText)) return;
    setResultText(resultText + operation);
  };

  return (
  <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.Bookmark}>
          <Text style={styles.resultFieldText}>Display</Text>
      </View>
      
      <View style={styles.resultField}>
          <Text style={styles.calculationText}>{resultText}</Text>
          <Text style={styles.resultText}>{calcText}</Text>
      </View>

      <View style={styles.Bookmark}></View>

      <View style={styles.row}>
          <TouchableOpacity   
              onPress={() => { 
                setResultText("");
                setCalcText("");
              }}>
              <Text style={styles.delete}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setResultText(resultText.slice(0, -1))}>
              <Text style={styles.delete}>DEL</Text>
          </TouchableOpacity>
      </View>

      {/* row 1 */}
      <View style={styles.row}>
           <TouchableOpacity onPress={() => onButtonClick(1)}>
               <Text style={styles.number}>1</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick(2)}>
               <Text style={styles.number}>2</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onOperationClick("-")}>
               <Text style={styles.operationButtonText}>-</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onOperationClick("+")}>
               <Text style={styles.operationButtonText}>+</Text>
           </TouchableOpacity>
      </View>

      {/* row 2 */}
      <View style={styles.row}>
           <TouchableOpacity onPress={() => onButtonClick(3)}>
               <Text style={styles.number}>3</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick(4)}>
               <Text style={styles.number}>4</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onOperationClick("/")}>
               <Text style={styles.operationButtonText}>/</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onOperationClick("*")}>
               <Text style={styles.operationButtonText}>x</Text>
           </TouchableOpacity>
     </View>

     {/* row 3 */}
     <View style={styles.row}>
           <TouchableOpacity onPress={() => onButtonClick(5)}>
               <Text style={styles.number}>5</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick(6)}>
               <Text style={styles.number}>6</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onOperationClick("%")}>
               <Text style={styles.operationButtonText}>%</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick("=")}>
               <Text style={styles.operationButtonText}>=</Text>
           </TouchableOpacity>
     </View>

     {/* row 4 */}
     <View style={styles.row}>
           <TouchableOpacity onPress={() => onButtonClick(7)}>
               <Text style={styles.number}>7</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick(8)}>
               <Text style={styles.number}>8</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick(9)}>
               <Text style={styles.number}>9</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => onButtonClick(0)}>
               <Text style={styles.number}>0</Text>
           </TouchableOpacity>
     </View>
     </View>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "#fa9b96",
    paddingTop: 25,
    paddingHorizontal: 30,
    paddingBottom: 15,
  },
  resultField: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  resultFieldText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginTop :25
  },
  resultText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  calculationText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  Bookmark: {
    flex: 1,
    backgroundColor: "#fa9b96",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 6,
    paddingTop: 2,
  },
  number: {
    width:65,
    backgroundColor: "#FF5757",
    borderRadius: 12,
    fontSize: 50,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },

  delete: {
    width:155,
    backgroundColor: "#FF5757",
    borderRadius: 12,
    fontSize: 50,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    marginBottom : 2
  },

  operationButtonText: {
    width:65,
    backgroundColor: "#732705",
    borderRadius: 12,
    fontSize: 50,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  }

})