import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageTitle from "../components/PageTitle";
import CustomButton from "../components/CustomButton";
import AddTodoImg from "../assets/images/addTodo.png";
export default function AddTodo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageTitle title="Welcome Onboard!" />
      <Image style={styles.image} source={AddTodoImg}/>
      <Text style={styles.text}>Add What your want to do later on..</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
      <CustomButton title="Add To List" onPress={() => navigation.navigate("AllTodo")} />
    </View>
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
