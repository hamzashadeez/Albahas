import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search, Result, BkResult } from "../screens";
import TabStack from "./Tab";

const Stack = createNativeStackNavigator();
//
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homestack" component={TabStack} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="result" component={Result} />
      <Stack.Screen name="bkresult" component={BkResult} />
    </Stack.Navigator>
  );
};

export default AppStack;
