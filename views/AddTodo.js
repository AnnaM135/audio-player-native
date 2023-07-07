import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageTitle from "../components/PageTitle";
import CustomButton from "../components/CustomButton";
import AddTodoImg from "../assets/images/addTodo.png";
export default function AddTodo() {
  const navigation = useNavigation();

  const [task, setTask] = useState("");
  const [description, setDescription]  = useState("");
  const [time, setTime] = useState("");

  const addTodo = () => {
    console.log(task, time, description)
     navigation.navigate("AllTodo")
  }

  return (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1,}}>
    <View style={styles.container}>
      <PageTitle title="Welcome Onboard!" />
      <Image style={styles.image} source={AddTodoImg}/>
      <Text style={styles.text}>Add What your want to do later on..</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="New Task Head" value={task} onChangeText={value => setTask(value)}/>
        <TextInput style={styles.input} placeholder="Task Description" value={description} onChangeText={value => setDescription(value)}/>
        <TextInput style={styles.input} placeholder="Task Deadline" value={time} onChangeText={value => setTime(value)} />
      </View>
      <CustomButton title="Add To List" onPress={() => addTodo()} />
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingTop: 50
  },
  text: {
    marginTop: 20,
    color: "rgba(85, 132, 122, 0.97)",
    fontWeight: 500,
    fontSize: 16,
  },
  image: {
    marginLeft: 50,
    marginTop: 20
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 340,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginTop: 25,
    color: "#000",
  },
});
