import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../Styles";

const SuraList = ({data}) => {
  return (
    <Pressable style={styles.card}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: "white",
          }}
        >
          {data.name.transliteration.en}
          <Text style={{
              paddingLeft: 20
          }}>{"        "+ data.name.short}</Text>
        </Text>
        <Text style={{
          color: Colors.grey,
          fontSize: 11
      }}>Surah Index: {data.number}</Text>
      </View>
      <Text style={{
          color: Colors.pink,
          fontSize: 10
      }}>{data?.numberOfVerses} verses</Text>
    </Pressable>
  );
};

export default SuraList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.color1,
    elevation: 3,
    padding: 10,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
