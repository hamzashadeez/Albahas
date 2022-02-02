import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home, Download, Search, BookMark } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Colors} from '../Styles'
// import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();
export default function TabStack() {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "download") {
            iconName = focused ? "download-circle" : "download-circle-outline";
          }
           else if (route.name === "search") {
            iconName = focused ? "cloud-search" : "cloud-search-outline";
          }
           else if (route.name === "bookmark") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: "#ccc",
        // tabBarShowLabel:false
        tabBarStyle:{backgroundColor: Colors.color1, borderTopWidth: 0}
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
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          title: "Search",
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
        name="bookMark"
        component={BookMark}
        options={{
          title: "BookMark",
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
        name="download"
        component={Download}
        options={{
          title: "download",
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
