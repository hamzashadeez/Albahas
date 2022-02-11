import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
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
  const [surah, setSurah] = useState({});
  const [loading, setLoading] = useState(true);
  const [aya, setAyat] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);

  const getSuraList = async () => {
    fetch("https://api.quran.sutanlab.id/surah")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
        setList(data.data);
      });
  };

  const getAyaDetail = () => {
    if (parseInt(aya) <= surah?.numberOfVerses) {
      setModalVisible(!modalVisible)
      navigation.navigate('result', {aya, surah: surah?.number})
      console.log(surah?.number);
      console.log(aya);
    } else {
      alert("Too much verse number for this surah");
    }
    // navigate to the other screen
    //and pass the data=> new screen
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

  const callVerseIndex = (data) => {
    console.log(data);
    setSurah(data);
    setModalVisible(true);
  };
  return (
    <View style={Styles.screen}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: Colors.color2,
            marginLeft: "5%",
            marginTop: "35%",
            elevation: 4,
            padding: 15,
          }}
        >
          <View>
            <Text
              style={{
                color: Colors.pink,
                textAlign: "center",
                marginBottom: 20,
                letterSpacing: 2,
                fontSize: 16,
              }}
            >
              {surah?.name?.transliteration.en}
              <Text
                style={{
                  paddingLeft: 20,
                }}
              >
                {"      " + surah?.name?.short}
              </Text>
            </Text>

            <Text
              style={{
                color: "#eee",
                textAlign: "center",
                marginBottom: 20,
                letterSpacing: 2,
                fontSize: 16,
              }}
            >
              Select Verse Number
            </Text>

            <TextInput
              placeholderTextColor="#ddd"
              keyboardType="number-pad"
              placeholder="Verse/Ayah Index"
              style={{
                backgroundColor: Colors.color3,
                width: "50%",
                padding: 5,
                paddingLeft: 10,
                color: "white",
                marginLeft: "25%",
              }}
              value={aya.toString()}
              onChangeText={(e) => setAyat(e)}
            />

            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: 25,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#f44",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{ color: "white" }}>Cancel</Text>
              </Pressable>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.pink,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: 3,
                }}
                onPress={() => getAyaDetail()}
              >
                <AntDesign name="search1" size={17} color="white" />
                <Text style={{ color: "white", marginLeft: 20 }}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* End Modal */}
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
              return (
                <SuraList
                  key={d.number}
                  data={d}
                  callVerseIndex={() => callVerseIndex(d)}
                />
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
