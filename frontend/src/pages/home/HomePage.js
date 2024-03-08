import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect } from 'react'
import { getAll } from '../../Services/foodservice';
import Thumbnails from '../../Components/Thumbnails/Thumbnails';
//the initial state of the reducer, setting the foods by default to an empty array in the homepage
const initialState = {foods: []};

//to add a reducer, gets the current state and the action we want to do 
const reducer = (state, action) => {

  switch (action.type) {

  case 'FOODS_LOADED':
    return { ...state, foods: action.payload }

  default:
    return state
  }
};

//using the reducer, by default the foods will be empty but after dispatch we can change the state of the foods
export default function HomePage() {
    const [state, dispatch] = usereducer(reducer, initialState);
    const{ foods } = state;

    //use effect to load foods, the empty array is a dependency list
    useEffect( () => {
        getAll().then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods}));
    }, []);


  return (
    <>
    <Thumbnails foods={foods} />
    </>
  );
}
