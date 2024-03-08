import React from 'react';
import classes from "./Thumbnails.module.css";
import { Link } from 'react-router-dom';
import Price from '../Price/Price';

export default function Thumbnails({foods}) {
  return (
    <ul className={classes.list}>
        {foods.map(food => (
            //each li represents a list item, with a link to the foodpage, and has the image of the food
            <li key={food.id}>
                <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}/>
               
                <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? '' : classes.not}`}
                  >
            ❤
            </span>
            <div className={classes.stars}>
                <starRating stars={foods.stars}/>
            </div>

            <div className={classes.product_item_footer}>
              <div className={classes.vendor}>
                {
                  food.vendor.map(vendor => (
                    <span key={vendor}>{vendor}</span>
                  ))}
                  </div>
                  <div className={classes.cook_time}>
                    <span>🕒</span>
                    {food.cookTime}
                  </div>
                </div>  
                <div className={classes.price}>
                <Price price={food.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}       
           

