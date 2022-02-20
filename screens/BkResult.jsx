import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Styles, Colors } from "../Styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

// import { StorageAccessFramework } from "expo-file-system";

const BkResult = ({ navigation, route }) => {
  const { data, aya, inQuran } = route.params;
  const [sound, setSound] = React.useState();
  const [bkmark, setBkmark] = useState([]);
  const [downloadState, setDownloads] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("bkmk").then((value) => {
      if (value !== null) {
        setBkmark(JSON.parse(value));
      }
    });
  }, []);

  const saveAudio = (d) => {
    try {
      let data =  [d, ...downloadState];
      AsyncStorage.setItem("downloads", JSON.stringify(data) ).then(()=>{
        console.log("DONE-----")
      });
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;

    console.log({
      downloadProgress: progress,
    });
  };

  const downloadResumable = FileSystem.createDownloadResumable(
    data?.audio?.primary,
    FileSystem.documentDirectory + `${inQuran}.mp3`,
    {},
    callback
  );

  const download = async () => {
    try {
      const { uri } = await downloadResumable.downloadAsync();
      let downloadData = {
        uri,
        aya,
        en: data?.surah?.name?.transliteration?.en,
        arab: data?.surah?.name?.long
      }
      saveAudio(downloadData)
      ToastAndroid.show("Downloaded...", ToastAndroid.SHORT);
      console.log("Finished downloading to ", uri);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    return AsyncStorage.getItem("downloads").then((value) => {
      if (value !== null) {
        setDownloads(JSON.parse(value));
      }
    });
  }, []);

  const readAyah = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: data?.audio?.primary,
    });
    setSound(sound);
    await sound.playAsync();
  };

  const deleteBookmark = async () => {
    // delete this bokmark
    const newList = bkmark.filter((bk) => bk.number.inQuran !== inQuran);
    try {
      AsyncStorage.setItem("bkmk", JSON.stringify(newList)).then(() => {
        navigation.goBack();
      });
    } catch (e) {
      // saving error
      console.log(e);
    }
    // route back to the list
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
      <View style={styles.align}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginLeft: 15,
            backgroundColor: "seagreen",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: Colors.color1, fontSize: 10 }}>{aya}</Text>
        </View>
        <TouchableOpacity
          onPress={() => deleteBookmark()}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginLeft: 15,
            backgroundColor: "#B83280",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="delete" size={16} color="white" />
          {/* <Text style={{ color: Colors.color1, fontSize: 10 }}>{aya}</Text> */}
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.btn} onPress={() => download()}>
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
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("home")}
        >
          <Feather name="home" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BkResult;

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

  align: {
    width: 100,
    display: "flex",
    flexDirection: "row",
  },
});
