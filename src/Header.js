import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {NavLink} from 'react-router-dom' ;
import {useStateValue } from './StateProvider';

function Header({cartCount}) { 

    const [{basket},dispatch] = useStateValue() ; 
    return (
        <div className='header'>
            <NavLink to="/">
                <img className="header_logo" alt = "" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </NavLink>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <div className='header_optionBasket'>
                    <NavLink to="/checkout">
                        <ShoppingBasketIcon />
                    </NavLink>
                    <span className='header_optionLineTwo header_basketCount'>{cartCount}</span>
                </div>
            </div>


        </div>
    )
}

export default Header