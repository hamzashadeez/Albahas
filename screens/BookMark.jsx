import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Styles, Colors } from "../Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookMark = () => {
  const [bkmark, setBkmark] = useState([]);
  useEffect(() => {
    return AsyncStorage.getItem("bkmk").then((value) => {
      if (value !== null) {
        setBkmark(JSON.parse(value));
      }
    });
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
          Bookmarks
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {bkmark.map((d) => (
          <TouchableOpacity
            style={{
              backgroundColor: Colors.color2,
              marginBottom: 10,
              padding: 10,
              marginHorizontal: 10,
              elevation: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
            key={d.number.inQuran}
          >
            <View>
              <Text>
                {d?.surah?.name?.transliteration?.en}
                {"   "}
                {d.surah?.name?.long}
              </Text>
              {/* <Text>{d.text?.arab}</Text> */}
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
                borderRadius: 15,
                backgroundColor: "seagreen",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: Colors.color1, fontSize: 10 }}>
                {d?.number.inSurah}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BookMark;
