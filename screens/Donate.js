import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Styles, Colors } from "../Styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as Linking from "expo-linking";
import { AdMobBanner } from "expo-ads-admob";

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
          fontSize: 17,
          marginVertical: 30,
          paddingHorizontal: 15,
          color: Colors.color3,
        }}
      >
        Albahas is a project handled by a small team, please consider donating
        to this project and let it be amoung your Sadaqa Jariya, any amount will
        surely help in the development of this project, Jazakallah khayrah
      </Text>
      {/* Albahas is coming... */}
      <TouchableOpacity
        style={styles.donateBtn}
        onPress={() => Linking.openURL("https://albahas.com.ng/donate.html")}
      >
        {/* icon here */}
        <FontAwesome5 name="hand-holding-usd" size={20} color="white" />
        <Text style={{ color: "white", fontSize: 14, marginLeft: 10 }}>
          Donate Now
        </Text>
      </TouchableOpacity>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-1388722598607337/3189350093" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={()=>console.log('error from banner')}
      />
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
    marginBottom: 100
  },
});
export default Donate;
