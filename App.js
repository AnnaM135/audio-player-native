import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from '@expo/vector-icons';

// views
import GetStarted from "./views/GetStarted";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import AddTodo from "./views/AddTodo";
import AllTodos from "./views/AllTodos";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerBackImage: () => (
             <FontAwesome5 name="arrow-alt-circle-left" size={24} color="#000" />
          ),
        }}

      >
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen
          name="AllTodo"
          component={AllTodos}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
