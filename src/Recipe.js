import React from "react";
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,healthLabels,totalNutrients,url}) =>{
	return(
		<div className={style.recipe}>
			
			<h1>{title}</h1>
			<img className={style.image} src={image} alt=""/>

			<il>
				{ingredients.map(ingredient=>(
					<li>{ingredient.text}</li>
				))}
			</il>
			<il class='healthLabels'>{healthLabels.map(healthLabels=>(
				<li>{healthLabels}</li>
			))}</il>
			<a href={url}>Full Recipe</a>
			
<p>Calories : {calories}</p>


			
		</div>
	);

}
export default Recipe;

