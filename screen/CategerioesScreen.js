import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import Meal from "../model/meal";
import MealOverviewScreen from "./MealsOverview";

function CatageriousScreen({ navigation }) {
  function renderCategoryIteam(itemData) {
    // creat a new function to navigate the meal app after clicking the categioer it will go in next page , first we have to creat a new page for mealOverview Then we will conncet the page with the help of naivigation
    function pressHandler() {
      navigation.navigate("MealsOverview",{
        categoryId: itemData.item.id,
        
      });
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryIteam}
      numColumns={2}
    />
  );
}

export default CatageriousScreen;
