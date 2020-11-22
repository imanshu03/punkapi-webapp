import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BeerCard from '../BeerCard/BeerCard';

const Favourites = () => {

    const allItems = useSelector(state => state.items.filter(item => item.favourite === true));

    return (
        <div className='favourites'>
            {
                allItems.map(item => <BeerCard item={item} showActions={false} key={item.id} />)
            }
        </div>
    );
};

export default withRouter(Favourites);