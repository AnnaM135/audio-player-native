import { StyleSheet, Image, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageTitle from "../components/PageTitle";
import SignInImg from "../assets/images/signIn.png";
import CustomButton from "../components/CustomButton";

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageTitle title="Welcome Back!" />
      <Image style={styles.image} source={SignInImg} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email address "
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#000"
        />
      </View>
      <Text style={styles.forgot}>Forgot Password ?</Text>
      <CustomButton
        title="Sign In"
        onPress={() => navigation.navigate("AddTodo")}
      />
      <Text style={styles.footer}>
        Dont have an account ?
        <Text style={styles.footerColor} onPress={() => navigation.navigate("SignUp")}> Sign Up!</Text>
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
    paddingTop: 50
  },
  image: {
    marginTop: 25
  },
  inputContainer: {
    marginTop: 10
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
  forgot: {
    marginVertical: 20,
    fontWeight: 500,
    color: "rgba(85, 132, 122, 0.97)",
    letterSpacing: 2
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
