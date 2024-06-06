import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe }) => {
    if (!recipe) {
        return (
            <div className="no-recipe-detail">
                <h2>No Recipe Selected</h2>
                <p>Please select a recipe to see the details.</p>
            </div>
        );
    }

    return (
        <div className="recipe-detail">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
            <h3>Ingredients:</h3>
            <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map(i => recipe[`strIngredient${i}`])
                    .filter(Boolean)
                    .map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
            </ul>
        </div>
    );
};

export default RecipeDetail;
