import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Styles, Colors } from "../Styles";
import Loader from "../components/Loader";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";

const Result = ({ navigation, route }) => {
  const { aya, surah } = route.params;
  const [data, setData] = useState({});
  const [sound, setSound] = React.useState();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      fetch(`https://api.quran.sutanlab.id/surah/${surah}/${aya}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
        });
    };
    getData();
  }, []);

  const bookmark_result = async () => {};

  const download = async () => {};

  const readAyah = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({
      uri: data?.audio?.primary,
    });
    setSound(sound);
    await sound.playAsync();
  };

  return (
    <View style={Styles.screen}>
      <View
        style={{
          backgroundColor: Colors.color1,
          paddingVertical: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: Colors.grey,
            fontSize: 16,
            letterSpacing: 1.5,
          }}
        >
          {data?.surah?.name?.transliteration?.en}
        </Text>
        <Text
          style={{
            color: Colors.pink,
            fontSize: 16,
            letterSpacing: 2,
          }}
        >
          {data?.surah?.name?.long}
        </Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          marginLeft: 15,
          borderRadius: 15,
          backgroundColor: "#B83280",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: Colors.color1, fontSize: 10 }}>{aya}</Text>
      </View>
      {/* Main */}
      <ScrollView style={{ padding: 15, flex: 1 }}>
        <Text
          style={{
            color: "grey",
            fontSize: 10,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          Arabic Text
        </Text>
        <Text
          style={{
            color: "pink",
            fontSize: 20,
            textAlign: "right",
            marginBottom: 15,
          }}
        >
          {data?.text?.arab}
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 10,
            textAlign: "left",
            marginBottom: 5,
          }}
        >
          Transliteration
        </Text>
        <Text
          style={{
            color: "#eaeaea",
            fontSize: 15,
            textAlign: "left",
            marginBottom: 15,
          }}
        >
          {data?.text?.transliteration.en}
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 10,
            textAlign: "left",
            marginBottom: 5,
          }}
        >
          Translation
        </Text>
        <Text
          style={{
            color: "#eaeaea",
            fontSize: 15,
            textAlign: "left",
            marginBottom: 15,
          }}
        >
          {data?.translation?.en}
        </Text>
      </ScrollView>
      {/* end of main */}
      <View style={styles.control}>
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="download" size={16} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => readAyah()}
          style={{
            borderRadius: 40,
            padding: 15,
            elevation: 10,
            backgroundColor: "#B83280",
          }}
        >
          <AntDesign name="sound" size={16} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Feather name="bookmark" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.color2,
    borderRadius: 40,
    padding: 13,
    elevation: 1,
  },
  control: {
    marginBottom: 15,
    width: "80%",
    elevation: 4,
    borderRadius: 5,
    backgroundColor: Colors.grey,
    height: 55,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: "10%",
    // paddingHorizontal: "10%",
  },
});
