import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AllTodos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Log Out"
        color="#55847A"
        onPress={() => navigation.navigate("GetStarted")}
      />
      <Text>All Todo</Text>
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

