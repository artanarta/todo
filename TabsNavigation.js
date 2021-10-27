import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import Todos from './src/screens/Todos';
import Detail from './src/components/Detail';
import Calculator from './src/components/Calculator';

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
function MyTab() {
  // Init Theme
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      screenOptions={({ route }) => ({
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#bf6a63" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Todos") {
            iconName = focused ? "list-circle" : "list";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator}  options={{headerShown: false}} />
      <Tab.Screen name="Todos" component={Todos}  options={{headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function TabsNavigation() {
  const theme = useTheme();

  return (
   
    <NavigationContainer>  
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
       <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}