import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Styles, Colors } from "../Styles";
import { Audio } from "expo-av";

const DownloadItem = ({ data }) => {
  const [playing, setPlaying] = useState(false);

  const playIt = async () => {
    try {
      console.log(data.uri);
      let source = { uri: "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Falbahas-edddd70e-abec-4864-88f2-55beb5eafd52/1.mp3" }
      const { sound } = await Audio.Sound.createAsync(
        //  {source: data.uri} 
        source,
        {
          shouldPlay: true
        }
      );
      // setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  };
  return (
    <View style={styles.item}>
      {/* Play btn */}
      <TouchableOpacity
        onPress={() => playIt()}
        style={styles.playBtn}
      ></TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{data.arab}</Text>
        <Text style={[styles.text, { color: Colors.color3 }]}>{data.en}</Text>
      </View>
      <Text style={{ color: Colors.color3 }}>
        Aya: <Text style={{ color: "seagreen" }}>{data.aya}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.color2,
    elevation: 3,
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    color: "seagreen",
    textAlign: "left",
  },
  playBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "seagreen",
    marginRight: 20,
  },
});
export default DownloadItem;
