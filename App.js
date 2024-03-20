import React from "react";
import { Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} backgroundColor={"transparent"} translucent />
      <Text style={styles.paragraph}>
        Open this snack on an android device with a punchole camera or notch to
        see the black bar where the status bar would usually be at the top of
        the screen.
      </Text>
      <Text style={styles.paragraph}>
        This issue also occurs with expo-status-bar and has been present since
        at least 2021.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
