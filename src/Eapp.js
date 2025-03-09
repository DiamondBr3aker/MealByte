import React, { useState } from "react";
import MealList from "./MealList";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Access the API key from environment variables
const genAI = new GoogleGenerativeAI(apiKey);

function Eapp() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Track errors

  async function getMealData() {
    setLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `Generate a structured meal plan for a day with a total of ${calories} calories. 
      Include breakfast, lunch, dinner, and snacks. Format it as:
      - Breakfast: <meal name>
      - Lunch: <meal name>
      - Dinner: <meal name>
      - Snacks: <snack name>
      Keep it concise and structured for easy parsing.`;

      const result = await model.generateContent(prompt);
      const responseText = await result.response.text(); // Extract response text

      console.log("🔍 AI Response:", responseText); // Debugging: Check raw AI output

      // Ensure responseText is valid
      if (!responseText || responseText.trim().length === 0) {
        throw new Error("AI returned an empty response.");
      }

      // **Parsing AI response into structured meal data**
      const lines = responseText.split("\n").filter((line) => line.trim() !== "");
      const formattedMeals = lines.map((line, index) => {
        const parts = line.split(":");
        return {
          id: index + 1,
          title: parts.length > 1 ? parts[1].trim() : "Unknown Meal",
          readyInMinutes: Math.floor(Math.random() * 30) + 10,
          servings: 1,
          sourceUrl: "#",
        };
      });

      if (formattedMeals.length === 0) {
        throw new Error("Parsed meal data is empty.");
      }

      // **Set meal data in state**
      setMealData({
        meals: formattedMeals,
        nutrients: {
          calories: calories,
          carbohydrates: Math.floor(calories * 0.5 / 4),
          fat: Math.floor(calories * 0.3 / 9),
          protein: Math.floor(calories * 0.2 / 4),
        },
      });

    } catch (error) {
      console.error("❌ Error fetching AI meal plan:", error);
      setError(error.message);
    }

    setLoading(false);
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="meal-planner">
      <h1>AI-Powered Meal Planner</h1>
      <section className="controls">
        <input type="number" placeholder="Enter Calories (e.g. 2000)" value={calories} onChange={handleChange} />
        <button onClick={getMealData} className="fetch-button" disabled={loading}>
          {loading ? "Generating..." : "Get AI Meal Plan"}
        </button>
      </section>
      
      {/* Show error message if API fails */}
      {error && <p className="error-message">❌ {error}</p>}

      {/* Display the meals if available */}
      {mealData && mealData.meals && mealData.meals.length > 0 ? (
        <MealList mealData={mealData} />
      ) : (
        !error && <p>No meals available. Try again.</p>
      )}
    </div>
  );
}

export default Eapp;
