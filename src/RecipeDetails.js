import React from 'react'
import style from './recipe.module.css'
import {v4 as uuidv4} from "uuid"

const RecipeDetails = ({ingredients, healthLabels}) => {
    return  ingredients.map(ingredient => {
        return (
            <ul key={uuidv4} className={style.ingredientList}>
                <li className={style.ingredientText}>{ingredient.text}</li>
            </ul>
        )
            
    })
}

export default RecipeDetails