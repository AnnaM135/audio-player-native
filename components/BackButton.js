import { Image, TouchableOpacity } from "react-native";
import backIcon from "../assets/images/icons/backArrow.png";

const BackButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ marginLeft: -5, }}>
      <Image source={backIcon} style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  );
};

export default BackButton;
