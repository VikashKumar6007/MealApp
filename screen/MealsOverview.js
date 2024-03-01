import { View, FlatList, StyleSheet } from "react-native";
import { MEALS , CATEGORIES} from "../data/dummy-data";
import MealIteam from "../components/MealIteam";
import { useEffect } from "react";
import Category from "../model/category";

function MealOverviewScreen({ route , navigation }) {
  const ctgID = route.params.categoryId;
  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(ctgID) >= 0;
  });

    useEffect(()=> {
      const categoryTitle= CATEGORIES.find((Category)=>
        Category.id === ctgID
      ).title;
      navigation.setOptions({
        title:categoryTitle,
      });
    },[ctgID , navigation]);

  function renderMealIteam(itemData) {
    const mealIteamProps = {
      id:itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealIteam {...mealIteamProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealIteam}
      />
    </View>
  );
}

export default MealOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
