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
        <p className={style.calorieText}>Total Calories: {calories}</p>
        <div class={style.rating}>
            <input type="radio" id="star5" name="rating" value="5">
            </input>
            <label for="star5"></label>
            <input type="radio" id="star4" name="rating" value="4">
            </input>
            <label for="star4"></label>
            <input type="radio" id="star3" name="rating" value="3">
            </input>
            <label for="star3"></label>
            <input type="radio" id="star2" name="rating" value="2">
            </input>
            <label for="star2"></label>
            <input type="radio" id="star1" name="rating" value="1">
            </input>
            <label for="star1"></label>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
            </>
    )
};

export default RecipeDetails;