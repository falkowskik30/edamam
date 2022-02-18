import React, {useState} from "react";
import RecipeDetails from "./RecipeDetails"
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,healthLabels,totalNutrients,url}) =>{
	const [show, setShow] = useState(false)
	return(
		<div className={style.recipe}>
			
			<h1>{title}</h1>
			<img className={style.image} src={image} alt=""/>
			<button onClick={()=> setShow(!show)} className={style.recipeDetails}>Details</button>
			{show && <RecipeDetails ingredients={ingredients}/>}			
		</div>
	);

}
export default Recipe;

