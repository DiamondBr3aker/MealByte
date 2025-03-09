import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  if (!mealData || !mealData.meals || mealData.meals.length === 0) {
    return <p>No meals found. Try generating again.</p>;
  }

  return (
    <main>
      <section className="nutrients">
        <h1>Nutrition Breakdown</h1>
        <ul>
          <li>Calories: {mealData.nutrients.calories} kcal</li>
          <li>Carbohydrates: {mealData.nutrients.carbohydrates}g</li>
          <li>Fat: {mealData.nutrients.fat}g</li>
          <li>Protein: {mealData.nutrients.protein}g</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
}
