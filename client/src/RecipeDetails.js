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

const RecipeDetails = ({ingredients, healthLabels, calories, nutrients, url}) => {
    console.log(ingredients);
    return (
        <>
        <div>
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

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography>Health Labels</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <il key ={uuidv4} className={style.healthLabelsList}>
                            {healthLabels.map(healthLabels=>(
                                <li>{healthLabels}</li>
                            ))}
                        </il>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography>Calories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <p className={style.calorieText}>Total Calories: {calories}</p>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography>Link</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                            <a href={url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
                    </Typography>
                </AccordionDetails>
        </Accordion>
        </div>
        
        <div className={style.StarBox}>
            <Rating></Rating>
        </div>
            </>
    )
};

export default RecipeDetails;

