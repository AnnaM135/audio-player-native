import { View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ellipseIcon from "./assets/images/icons/Ellipses.png";

// views
import GetStarted from "./views/GetStarted";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import AddTodo from "./views/AddTodo";
import AllTodos from "./views/AllTodos";
import BackButton from "./components/BackButton";

export default function App() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerTitle: "",
    headerTransparent: true,
    headerBackTitleVisible: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={() => ({
            headerBackground: () => (
              <Image
                source={ellipseIcon}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 160,
                  height: "100%",
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
            headerBackground: () => (
              <Image
                source={ellipseIcon}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 160,
                  height: "100%",
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
            headerBackground: () => (
              <Image
                source={ellipseIcon}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 160,
                  height: "100%",
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
            headerBackground: () => (
              <Image
                source={ellipseIcon}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 160,
                  height: "100%",
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AllTodo"
          component={AllTodos}
          options={() => ({
            headerLeft: () => <Text />,
            headerBackground: () => (
              <Image
                source={ellipseIcon}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 160,
                  height: "100%",
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
