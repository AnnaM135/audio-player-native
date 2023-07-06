import { View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import backIcon from "./assets/images/icons/backArrow.png";
import ellipseIcon from "./assets/images/icons/Ellipses.png";

// views
import GetStarted from "./views/GetStarted";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import AddTodo from "./views/AddTodo";
import AllTodos from "./views/AllTodos";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BackButton = ({ navigation }) => {
    const handlePress = () => {
      navigation.goBack();
    };
  
    return (
      <TouchableOpacity onPress={handlePress} style={{ marginLeft: 16 }}>
        <Image
          source={backIcon}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    );
  };
  const CircleIcon = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: -400,
          zIndex: 999,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={ellipseIcon} style={{ width: 100, height: 100 }} />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerRight: () => <CircleIcon />,
        }}
      >
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="AllTodo"
          component={AllTodos}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
