// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import AppStack from "./stacks/AppStack";
import Flash from "./screens/Flash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="flash" component={Flash} />
            <Stack.Screen name="app" component={AppStack} />
          </Stack.Navigator>
          {/* <AppStack/> */}
        </View>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
