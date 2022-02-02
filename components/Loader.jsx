import { View, ActivityIndicator } from "react-native";
import { Colors } from "../Styles";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <ActivityIndicator size={26} color={Colors.grey} />
    </View>
  );
};

export default Loader;
