import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton.js";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <CustomButton
        onPress={() => navigation.navigate("SignIn")}
        title="Sign Up"
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
