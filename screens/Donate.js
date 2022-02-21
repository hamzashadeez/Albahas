import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Styles, Colors } from "../Styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as Linking from "expo-linking";

const Donate = () => {
  return (
    <View style={Styles.screen}>
      <View
        style={{
          backgroundColor: Colors.color1,
          paddingVertical: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: Colors.pink,
            textAlign: "center",
            letterSpacing: 1.6,
            textTransform: "uppercase",
            fontSize: 15,
          }}
        >
          Donate
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 30,
          paddingHorizontal: 15,
          color: Colors.color3,
        }}
      >
        Albahas is a project handled my a small team, please consider donating
        to this project and let it be amoung your Sadaqa Jariya, any amount will
        surely help in the development of this project, Jazakallah khayrah
      </Text>
      <TouchableOpacity
        style={styles.donateBtn}
        onPress={() => Linking.openURL("https://albahas.com.ng")}
      >
        {/* icon here */}
        <FontAwesome5 name="hand-holding-usd" size={20} color="white" />
        <Text style={{ color: "white", fontSize: 14, marginLeft: 10 }}>
          Donate Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  donateBtn: {
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: "seagreen",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    width: "60%",
    marginLeft: "20%",
  },
});
export default Donate;
