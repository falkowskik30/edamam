//import React from 'react';
import style from './recipe.module.css';
import {v4 as uuidv4} from "uuid";
//import StarRatingComponent from 'react-star-rating-component';
import {Rating} from 'react-simple-star-rating';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RecipeDetails = ({ingredients, healthLabels, calories, Nutrients, url}) => {
    console.log(ingredients);
    return (
        <>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography>Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <il key={uuidv4} className={style.ingredientList}>
                            {ingredients.map(ingredient => (
                                <li className={style.ingredientText}>{ingredient.text}</li>
                            ))}
                        </il>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Rating></Rating>
            </>
    )
};

export default RecipeDetails;

