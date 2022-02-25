import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css';
import Recipe from './Recipe';
import axios from 'axios';

//const { REACT_APP_API_ID, REACT_APP_API_KEY } = process.env;
const App = () => {
//const APP_ID = 'cd1acdba';
//const APP_KEY = 'd97d94719c7af890ade470b71d75eb8c';
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("chicken");
useEffect(() => {
	getRecipes(); // eslint-disable-next-line
}, [query])
const getRecipes = async () => {
	//const response = await fetch
	//	(`https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`);
	//const data = await response.json();
	//setRecipes(data.hits);
	// console.log(data);
	const response = await axios.get(`http://localhost:5000/recipes/${query}`);
	setRecipes(response.data.hits);
};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App">
	<div class='banner'><img src='logo.png' alt='' ></img></div>
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
	<div className="recipes">
		{recipes.map(recipe => (
		<Recipe
			key={uuidv4}
			title={recipe.recipe.label}
			calories={recipe.recipe.calories.toFixed(2)}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredients}
			healthLabels={recipe.recipe.healthLabels}
			Nutrients={recipe.recipe.Nutrients}
			url={recipe.recipe.url}
		/>

		))}
	</div>
	<div class='footer'>POWERED by EDAMAM</div>

	</div>
);
}

export default App;

