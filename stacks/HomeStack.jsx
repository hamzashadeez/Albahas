import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Search } from "../screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
}
