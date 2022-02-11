import { View, Text, StyleSheet, Pressable } from "react-native";

const Result = ({navigation, route}) => {
  const { aya, surah } = route.params;

  return (
    <View>
      <Text>Result Screen</Text>
      <Text>{JSON.stringify(aya)}</Text>
      <Text>{JSON.stringify(surah)}</Text>
    </View>
  );
};

export default Result;
