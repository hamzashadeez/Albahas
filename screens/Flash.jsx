// import { NetworkStateType } from "expo-network";
import { useEffect } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { useRecoilState } from "recoil";
import Surahs from "../recoil/Atom";

const Flash = ({ navigation }) => {
  const [surahs, setSurahs] = useRecoilState(Surahs);
//   const NetworkState = await NetworkStateType.getNetworkStateAsync();
//   console.log(NetworkState)
  const getSuraList = async () => {
    try {
      fetch("https://api.quran.sutanlab.id/surah")
        .then((response) => response.json())
        .then((data) => {
          setSurahs(data.data);
          navigation.navigate('app')
        });
    } catch (error) {
      consoe.log("error");
    }
  };

  useEffect(() => {
    getSuraList();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "seagreen", fontWeight: "bold", fontSize: 40 }}>
          Albahas
        </Text>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginLeft: -43,
            opacity: 0.7,
            backgroundColor: "seagreen",
          }}
        ></View>
      </View>
      {/*  */}
      <ActivityIndicator size={15} color="seagreen" />
    </View>
  );
};

export default Flash;
