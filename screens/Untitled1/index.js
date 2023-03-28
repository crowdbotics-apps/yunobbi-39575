import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.JqhQLdKj} value="Account summary"></TextInput></ScrollView>
    <TextInput style={styles.NmwJfvvY}></TextInput></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#e69f9f"
  },
  FTZcRPIJ: {
    position: "absolute",
    width: 100,
    height: 150
  },
  FWYnuWJV: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  UQPDaNDe: {
    backgroundColor: "#000000",
    height: 1
  },
  JqhQLdKj: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 242,
    height: 68
  },
  NmwJfvvY: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled1;