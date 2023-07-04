import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Task from "./OldTasksDesign";

export default function OldTodoDesign() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTodo = () => {
    setTasks([...tasks, task]);
    setTask(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Lorem ipsum</Text>
        <View style={styles.items}>
          {tasks.map((item, index) => (
            <Task key={index} text={item} />
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor="#C0C0C0"
          placeholder={"Write a task"}
          value={task}
          onChangeText={(newText) => setTask(newText)}
          underlineColorAndroid={"rgba(0,0,0,0)"}
        />
        <TouchableOpacity onPress={() => handleAddTodo()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  input: {
    width: 250,
    height: 45,
    paddingHorizontal: 20,
    borderRadius: 60,
    backgroundColor: "white",
    textTransform: "none",
    color: "#000000",
    fontSize: 16,
    shadowColor: "#D0D0D0",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 30,
    elevation: 5,
    borderBottomWidth: 0,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#D0D0D0",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 30,
    elevation: 5,
  },

  addText: {
    color: "#C0C0C0",
    fontSize: 30,
  },
});

