import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function OldTasksDesign ({text}) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLeft: {
    borderRadius: 5,
    background: "rgba(85, 188, 246, 0.40)",
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    marginRight: 15,
  },
  itemText: {
    color: "#1A1A1A",
    fontSize: 18,
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderColor: "#55BCF6",
    borderWidth: 2,
  },
});

