import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const fetchRecipes = async (query) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        setRecipes(response.data.meals);
    };

    return (
        <Router>
            <div>
                <header>
                    <h1>Recipe Finder</h1>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/search"
                        element={
                            <>
                                <SearchBar onSearch={fetchRecipes} />
                                <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
                                <RecipeDetail recipe={selectedRecipe} />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
