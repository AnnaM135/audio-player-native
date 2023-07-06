import { StyleSheet, Text } from "react-native";

const PageTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#000",
    marginTop: 40,
  },
});

export default PageTitle;