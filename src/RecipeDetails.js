import React from 'react';
import style from './recipe.module.css';
import {v4 as uuidv4} from "uuid";

const RecipeDetails = ({ingredients, healthLabels}) => {
    return (
        <><il key={uuidv4} className={style.ingredientList}>
            {ingredients.map(ingredient => (
                <li className={style.ingredientText}>{ingredient.text}</li>
            ))}
        </il><il key ={uuidv4} className={style.healthLabelsList}>
                {healthLabels.map(healthLabels=>(
                    <li>{healthLabels}</li>
                ))}
            </il></>
    )
};

export default RecipeDetails;