import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [exampleRecipes, setExampleRecipes] = useState([]);

    useEffect(() => {
        const fetchExampleRecipes = async () => {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
            setExampleRecipes(response.data.meals.slice(0, 3)); // Display first 3 example recipes
        };
        fetchExampleRecipes();
    }, []);

    return (
        <div className="home-page">
            <h1>Welcome to Recipe Finder</h1>
            <p>Find the best recipes based on your favorite ingredients or dish names.</p>
            <Link to="/search" className="start-searching-btn">Start Searching</Link>
            <h2>Example Recipes</h2>
            <div className="example-recipes">
                {exampleRecipes.map(recipe => (
                    <div key={recipe.idMeal} className="example-recipe-card">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h3>{recipe.strMeal}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
