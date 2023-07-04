import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AddTodo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Add Todo</Text>
      <Button
        title="Add to list"
        color="#55847A"
        onPress={() => navigation.navigate("AllTodo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
});
