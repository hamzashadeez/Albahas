// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabStack from "./stacks/Tab";
import { Search, Result } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="homestack" component={TabStack} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="result" component={Result} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: StatusBar.currentHeight,
  },
});
