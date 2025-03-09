import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <div className="hero">
        <h1>Welcome to Your Meal Planner</h1>
        <p>Generate meal plans based on your calorie goals and stay healthy!</p>
        <Link to="/eapp">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
