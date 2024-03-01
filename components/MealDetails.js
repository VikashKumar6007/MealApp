import { View, Text, StyleSheet } from "react-native";
function MealDetails({ duration, complexity, affordability  , style , textStyle}) {

  return (
    <View
      style={[styles.details , style]}
    >
      <Text style={[styles.detailsIteam , textStyle]}>{duration }</Text>
      <Text style={[styles.detailsIteam , textStyle]}>{complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailsIteam , textStyle]}>
        {affordability?.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details:{
    margin: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
  },
  detailsIteam:{
    marginHorizontal: 4,
     fontSize: 12,
  }
})
