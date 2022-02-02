import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles, Colors } from "../Styles";
import { AntDesign } from "@expo/vector-icons";
import SuraList from "../components/SuraList";
import Loader from "../components/Loader";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSuraList = async () => {
    fetch("https://api.quran.sutanlab.id/surah")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data); 
        setList(data.data); 
      });
  };

  useEffect(() => {
    const filteredList = list.filter((item) => {
      let all_str = `${item.name.transliteration.en}`.toLowerCase();
      return all_str.indexOf(search.toLowerCase()) > -1;
    });
    setData(filteredList);
  }, [search]);

  useEffect(() => {
    getSuraList();
  }, []);

  const cancel = () => {
    setSearch("");
    navigation.goBack();
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
          justifyContent: "flex-start",
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <AntDesign name="search1" size={20} color={Colors.grey} />
        <TextInput
          placeholderTextColor={Colors.grey}
          value={search}
          onChangeText={(e) => setSearch(e)}
          style={{
            flex: 1,
            paddingHorizontal: 10,
            color: "white",
            height: "100%",
            fontSize: 14,
            letterSpacing: 1,
          }}
          placeholder="search.."
        />
        <TouchableOpacity onPress={() => cancel()}>
          <Text style={{ color: Colors.pink }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: Colors.grey,
          fontWeight: "500",
          marginLeft: 10,
          marginBottom: 5,
        }}
      >
        {search === "" ? "Quran Chapters" : "Search Results"}
      </Text>
      <ScrollView
        style={{
          padding: 15,
          flex: 1,
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {data.map((d) => {
              return <SuraList key={d.number} data={d} />;
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
