import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football Amateur app</Text>
      <Text style={styles.subtitle}> Find your next match</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/matches")}
      >
        <Text style={styles.buttonText}> Find available matches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.buttonText}>
          Create a new match
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/profile")}
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: Colors.light.text,
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  createButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 5,
    width: "80%",
    alignItems: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",

    // Un color verde para destacar la acción de crear
  },
});
