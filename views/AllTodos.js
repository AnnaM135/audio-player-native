import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import WomanBicycleImg from "../assets/images/womanBicycle.png";
import PeopleImg from "../assets/images/peopleAccount.jpg";

export default function AllTodos() {
  const navigation = useNavigation();
  const taskData = [
    "Follow Oluwafisayomi.dev on Twitter.",
    "Learn Figma by 4pm.",
    "Coding at 9am.",
    "Watch Mr Beasts Videos.",
  ];
  const [tasks, setTasks] = useState([]);

  const pickTask = (selectedTask) => {
    if (tasks.includes(selectedTask)) {
      setTasks(tasks.filter((task) => task !== selectedTask));
      return;
    }
    setTasks((tasks) => tasks.concat(selectedTask));
  };

  return (
    <View style={styles.container}>
      <View style={styles.accountHeader}>
        <View style={styles.profilePicture}>
          <Image style={styles.personImg} source={PeopleImg} />
        </View>
        <Text style={styles.title}>Welcome Name</Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.navigate("GetStarted")}
        >
          <Text style={{fontSize: 13}}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 200, height: 250 }}>
        <Image style={{ width: '100%', height: '100%', objectFit: 'cover' }} source={WomanBicycleImg} />
      </View>
      <View style={styles.taskContainer}>
        <Text title="Todo Tasks" style={styles.title}>
          Todo Tasks.
        </Text>
        <View style={styles.taskContainerBody}>
          <View style={styles.taskContainerHeader}>
            <Text style={styles.taskType}>Daily Tasks.</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("AddTodo")}}>
              <Ionicons name="add-circle" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.taskList}>
            {taskData.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.checkboxContainer}
                onPress={() => pickTask(option)}
              >
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    {
                      backgroundColor: tasks.includes(option)
                        ? "rgba(85, 132, 122, 0.80)"
                        : undefined,
                    },
                  ]}
                ></TouchableOpacity>
                <Text style={styles.todo}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  accountHeader: {
    width: "100%",
    height: 230,
    paddingTop: 70,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(85, 132, 122, 0.70)",
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,
    transform: "scale(1.3)",
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'rgba(85, 132, 122, 0.97)',
    padding: 3
  },
  personImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 50,
  },
  logout: {
    marginTop: 10,
    backgroundColor: 'rgba(85, 132, 122, 0.60)',
    paddingBottom: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  taskContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#000",
  },
  taskContainerBody: {
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 30,
  },
  taskContainerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  taskType: {
    color: "rgba(0, 0, 0, 0.47)",
    fontSize: 16,
  },
  taskList: {
    flexDirection: "column",
    rowGap: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 17,
    height: 17,
    borderColor: "#000",
    borderWidth: 2,
    marginRight: 10,
  },
  todo: {
    color: "#000",
    fontSize: 16,
    fontWeight: 500,
  },
});
