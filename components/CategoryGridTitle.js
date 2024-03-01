import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({ title, color ,onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer , {backgroundColor:color}]}>
          <Text style={styles.tittleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "white",
    shadowColor:'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.2,
  },
  buttonStyle: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  tittleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
