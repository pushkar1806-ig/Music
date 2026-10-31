// app/(tabs)/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screenContainer}>
      <Tabs
        screenOptions={{
          tabBarStyle: [
            styles.container,
            { bottom: Math.max(insets.bottom, 12) },
          ],
          tabBarItemStyle: styles.icons,
          headerShown: false,
          tabBarActiveTintColor: "#ff5b64",
          tabBarInactiveTintColor: "#ff5b64",
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeRectangle,
                ]}
              >
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={22}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeRectangle,
                ]}
              >
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  size={22}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Saved",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeRectangle,
                ]}
              >
                <Ionicons
                  name={focused ? "library" : "library-outline"}
                  size={22}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeRectangle,
                ]}
              >
                <Ionicons
                  name={focused ? "settings-sharp" : "settings-outline"}
                  size={22}
                  color={color}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#121212",
    position: 'fixed',
    bottom: 0
  },
  container: {
    position: "absolute",
    width: "92%",
    height: 59,
    marginTop: 10,
    marginLeft: 12,
    borderRadius: 50,
    backgroundColor: "#1e1e1e",
    borderTopWidth: 0,
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  icons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 35,
    borderRadius: 50,
    marginTop: 10,
  },
  activeRectangle: {
    backgroundColor: "#332123",
    height: 40,
    width: 50,
  },
});