import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes, onSelect }) => {
    if (!recipes) {
        return <div className="no-recipes">No recipes found. Please try a different search.</div>;
    }

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="recipe-card" key={recipe.idMeal} onClick={() => onSelect(recipe)}>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h3>{recipe.strMeal}</h3>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
