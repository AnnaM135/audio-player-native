import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WomanBicycleImg from "../assets/images/womanBicycle.png";
import PageTitle from "../components/PageTitle";
import { Ionicons } from "@expo/vector-icons";

export default function AllTodos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.accountHeader}>
        <PageTitle title="Welcome Fisayomi" />
        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.navigate("GetStarted")}
        >
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
      <Image source={WomanBicycleImg} />
      <View style={styles.taskContainer}>
        <Text title="Todo Tasks" style={styles.title}>
          Todo Tasks.
        </Text>
        <View style={styles.taskContainerBody}>
          <View style={styles.taskContainerHeader}>
            <Text style={styles.taskType}>Daily Tasks.</Text>
            <Ionicons name="add-circle" size={32} color="black" />
          </View>
          <View style={styles.taskList}>
            <View style={styles.checkboxContainer}>
              <Text style={styles.todo}>
                Follow Oluwafisayomi.dev on Twitter.
              </Text>
            </View>
            <View>
              <Text>Learn Figma by 4pm.</Text>
            </View>
            <View>
              <Text>Coding at 9am.</Text>
            </View>
            <View>
              <Text>Watch Mr Beasts Videos.</Text>
            </View>
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
    height: 200,
    paddingVertical: 60,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#55847A",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    transform: "scale(1.3)",
  },
  logout: {
    marginTop: 10,
    backgroundColor: "#C0C0C0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
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
});
