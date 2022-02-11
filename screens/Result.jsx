import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Styles, Colors } from "../Styles";
import Loader from "../components/Loader";

const Result = ({ navigation, route }) => {
  const { aya, surah } = route.params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      fetch(`https://api.quran.sutanlab.id/surah/${surah}/${aya}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data.data);
          console.log(data.data);
        });
    };
    getData();
  }, []);

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
      {/* <Loader /> */}

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
        <Text style={{ color: "#eaeaea", fontSize: 15, textAlign: "left", marginBottom: 15 }}>
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
          <Text style={{ color: "#eaeaea", fontSize: 15, textAlign: "left", marginBottom: 15 }}>
          {data?.translation?.en}
        </Text>
      </ScrollView>
      {/* end of main */}
      {/* <Text>{JSON.stringify(aya)}</Text>
      <Text>{JSON.stringify(surah)}</Text> */}
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
