import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Home, Donate, BookMark } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../Styles";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();
export default function TabStack({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName =  "home";
          } else if (route.name === "donate") {
            iconName =  "hand-holding-usd";
          } else if (route.name === "bookmark") {
            iconName = "bookmark" ;
          }

          // You can return any component that you like here!
          return (
            <FontAwesome5 name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: Colors.color3,
        // tabBarShowLabel:false
        tabBarStyle: { backgroundColor: Colors.color1, borderTopWidth: 0 },
      })}
    >
      <Tab.Screen
        options={{
          title: "Home",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#61305D",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="home"
        component={Home}
        navigation={navigation}
      />

      <Tab.Screen
        name="bookmark"
        component={BookMark}
        options={{
          title: "Bookmark",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#61305D",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="donate"
        component={Donate}
        options={{
          title: "donate",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#61305D",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}
