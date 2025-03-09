import React from "react";

export default function Meal({ meal }) {
  return (
    <article>
      <h2>{meal.title}</h2>
      <ul className="instructions">
        <li>Prep time: {meal.readyInMinutes} minutes</li>
        <li>Servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>View Recipe</a>
    </article>
  );
}
