import React, {useState} from "react";
import RecipeDetails from "./RecipeDetails"
import style from './recipe.module.css';
//import * as React from 'react';

const Recipe = ({title,calories,image,ingredients,healthLabels,Nutrients,url}) =>{
	const [show, setShow] = useState(false)
	return(
		<div className={style.recipe}>
			
			<h1>{title}</h1>
			<img className={style.image} src={image} alt=""/>

			<button onClick={()=> setShow(!show)} className={style.recipeDetails}>Details</button>
			{show && <RecipeDetails ingredients={ingredients} healthLabels={healthLabels} calories={calories} nutrients={Nutrients} url={url}/>}			
			
		</div>
	);

}
export default Recipe;



