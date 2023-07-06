import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton.js";
import PageTitle from "../components/PageTitle.js";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageTitle title="Welcome Onboard!" />
      <Text style={styles.text}>Let’s help you meet up your task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Full Name"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Email address "
        />
        <TextInput
          style={styles.input}
          placeholder="Create a Password"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm your Password"
          placeholderTextColor="#000"
        />
      </View>

      <CustomButton
        onPress={() => navigation.navigate("SignIn")}
        title="Sign Up"
      />
      <Text style={styles.footer}>
        Already have an account ?
        <Text
          style={styles.footerColor}
          onPress={() => navigation.navigate("SignIn")}
        >
          {" "}
          Sign In!
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    marginTop: 20,
    color: "rgba(85, 132, 122, 0.97)",
    fontWeight: 500,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 40,
    marginBottom: 70,
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
  footer: {
    marginTop: 30,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.62)",
    fontWeight: 500,
  },
  footerColor: {
    color: "#55847A",
  },
});
