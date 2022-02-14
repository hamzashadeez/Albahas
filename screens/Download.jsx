import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Styles } from '../Styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Download = () => {
  const [bkmark, setBkmark] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("bookmarkhamza").then((value) => {
      if (value !== null) {
        setBkmark(JSON.parse(value));
        console.log(JSON.parse(value));
      }
    });
  }, []);
  return (
    <View style={Styles.screen}>
      <Text>Download</Text>
    </View>
  );
};

export default Download;
