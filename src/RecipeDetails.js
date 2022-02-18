import React from 'react';
import style from './recipe.module.css';
import {v4 as uuidv4} from "uuid";

const RecipeDetails = ({ingredients, healthLabels, calories, Nutrients, url}) => {
    return (
        <><il key={uuidv4} className={style.ingredientList}>
            {ingredients.map(ingredient => (
                <li className={style.ingredientText}>{ingredient.text}</li>
            ))}
        </il>
        <h2>Health Labels</h2>
        <il key ={uuidv4} className={style.healthLabelsList}>
                {healthLabels.map(healthLabels=>(
                    <li>{healthLabels}</li>
                ))}
            </il>
        <p>Total Calories: {calories}</p>
        <p>{Nutrients}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
            </>
    )
};

export default RecipeDetails;