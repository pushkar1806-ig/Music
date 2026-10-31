import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// If you create a mini player component later, you can import it here:
// import MiniPlayer from '../src/components/player/MiniPlayer';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />

      {/* Main Stack Navigator for routing between Tabs and Fullscreen Player */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="player/[id]"
          options={{
            presentation: "modal", // Slides up smoothly like Spotify/Apple Music
            animation: "slide_from_bottom",
          }}
        />
      </Stack>

      {/* Persistent MiniPlayer component can be placed here globally */}
      {/* <MiniPlayer /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});