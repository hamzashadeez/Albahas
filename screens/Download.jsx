import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Styles, Colors } from '../Styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DownloadItem from '../components/DownloadItem';

const Download = () => {
  const [downloads, setDownloads] = useState([]);
 
  useEffect(() => {
     async function check(){
      AsyncStorage.getItem("downloads").then((value) => {
        if (value !== null) {
          setDownloads(JSON.parse(value));
        }
      });
     }

     check()
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
          Download
        </Text>
      </View>
      {/* End of Header */}
      <ScrollView style={{flex: 1, padding: 10}}>
          {downloads.map((d)=>{
            return <DownloadItem data={d} key={d.uri} />
          })}
      </ScrollView>
    </View>
  );
};

export default Download;


