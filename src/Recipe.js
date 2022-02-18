import React from "react";
import RecipeDetails from "./RecipeDetails"
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,healthLabels,totalNutrients,url}) =>{
	return(
		<div className={style.recipe}>
			
			<h1>{title}</h1>
			<img className={style.image} src={image} alt=""/>
			<button className={style.recipeDetails}>Details</button>
			<RecipeDetails ingredients={ingredients}/>			
		</div>
	);

}
export default Recipe;

