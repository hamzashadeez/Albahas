import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors, Styles } from "../Styles";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import Surahs from "../recoil/Atom";

const Home = ({ navigation }) => {
  const [surahs, setSurahs] = useRecoilState(Surahs);

  const getSuraList = async () => {
    try {
      fetch("https://api.quran.sutanlab.id/surah")
        .then((response) => response.json())
        .then((data) => {
          setSurahs(data.data);
        });
    } catch (error) {
      consoe.log("error");
    }
  };

  useEffect(() => {
    getSuraList();
  }, []);

  return (
    <View style={Styles.screen}>
      <View style={Styles.header}>
        <Text style={Styles.h1}>ALBAHAS</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              color: Colors.color2,
              marginVertical: 25,
              textAlign: "center",
            }}
          >
            Tap to Bahas
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("search", { transition: "vertical" })
            }
            style={{
              width: 200,
              height: 200,
              borderRadius: 125,
              backgroundColor: Colors.color2,
              elevation: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Icon */}
            <AntDesign name="search1" size={64} color={Colors.pink} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
