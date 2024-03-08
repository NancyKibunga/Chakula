import React from 'react';

//uses the classes that come from the css file for isolation
import classes from './header.module.css';
import { Link } from 'react-router-dom';

  
export default function Header() {
//login functionality
    const user = {
        name: 'John',

    };
    //cart functionality
    const cart = {
        totalCount:10,
    };
//logout functionality
    const logout =() => {}

  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                Chakula! 
                </Link>
                <nav>
                    <ul>
                        {
//if the user is available
                            user? (
                            //the menu has three things i.e profile, orders, logout
                            <li className={classes.menu_container}>
                                <Link to="/profile">Profile</Link>
                                <div className={classes.menu}>
                                <Link to="/orders">Orders</Link>
                                <a onClick={logout}>Logout</a>
                                </div>
                                </li> 
                                ) : (
                                //when the user is not available
                                <Link to="./login">Login</Link>
                      ) }
                            <li>
                                <Link to="/cart"> Cart 
                                {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                                </Link>
                                
                            </li>

                    </ul>
                </nav>
                </div> 
                   </header> 
       );             

}
