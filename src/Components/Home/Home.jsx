import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../RestServices/axios';
import { setItems, clearItems, setSearchItems } from '../../Redux/Actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import BeerCard from '../BeerCard/BeerCard';

const Home = () => {

    const page = useRef(1);
    const prevText = useRef('');
    const doSearch = useRef(false);

    const [searchText, setSearchText] = useState('');

    const allItems = useSelector(state => state.items);
    const dispatch = useDispatch();

    const getData = useCallback(async () => {
        let searchParams = new URLSearchParams();
        if (doSearch.current && searchText !== '') {
            searchParams.append('beer_name', searchText);
        }
        searchParams.append('page', page.current);
        try {
            const response = await Axios.get('beers', { params: searchParams });
            const items = await response.data;
            items.forEach(item => item.favourite = false);
            setTimeout(() => {
                if (doSearch.current && searchText !== '' && page.current === 1) {
                    dispatch(setSearchItems(items));
                } else {
                    dispatch(setItems(items));
                }
                page.current += 1;
            }, 500);
        } catch (error) {
            console.log(error);
        }
    }, [page, dispatch, searchText]);

    const searchItems = () => {
        doSearch.current = true;
        prevText.current = searchText;
        page.current = 1;
        getData();
    };

    const searchPressed = (e) => {
        if (e.which === 13) {
            searchItems();
        }
    };

    useEffect(() => {
        if (prevText.current !== '' && searchText === '' && doSearch.current) {
            dispatch(clearItems());
            doSearch.current = false;
            page.current = 1;
            getData();
        }
        prevText.current = searchText;
    }, [searchText, prevText, getData, dispatch]);

    return (
        <>
            <div className="searchBar">
                <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search by beer name' onKeyPress={searchPressed} />
                {searchText !== '' && doSearch.current ? <i className="fas fa-times" onClick={() => setSearchText('')}></i> : null}
                <button onClick={searchItems}>Search</button>
            </div>
            <div className="home">
                <InfiniteScroll
                    dataLength={allItems.length}
                    next={getData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    className='home-items'
                >
                    {
                        allItems.map(item => <BeerCard item={item} key={item.id} showActions={true} />)
                    }
                </InfiniteScroll>
            </div>
        </>
    );
};

export default Home;