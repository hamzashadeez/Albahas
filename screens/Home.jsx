import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Colors, Styles } from "../Styles";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  const [tabed, settabed] = useState(false);
  return (
    <View style={Styles.screen}>
      <View style={Styles.header}>
        <Text style={Styles.h1}>ALBAHAS</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        {/* One Container */}
        {tabed === false ? (
          <View>
            <Text
              style={{
                fontSize: 18,
                color: Colors.color2,
                fontWeight: 500,
                marginVertical: 25,
                textAlign: 'center'
              }}
            >
              Tap to Bahas
            </Text>
            <Pressable
              onPress={() => settabed(!tabed)}
              style={{
                width: 200,
                height: 200,
                borderRadius: 125,
                backgroundColor: Colors.color2,
                elevation: 3,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Icon */}
              <AntDesign name="search1" size={64} color={Colors.pink} />
            </Pressable>
            {/* end */}
          </View>
        ) : (
          <View
            style={{
              backgroundColor: Colors.color2,
              width: "95%",
              height: 300,
              elevation: 3,
              borderRadius: 10,
              marginTop: 15,
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{
              textAlign: 'center',
              color: Colors.color1,
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: 1.3
            }}>Select Surah</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
