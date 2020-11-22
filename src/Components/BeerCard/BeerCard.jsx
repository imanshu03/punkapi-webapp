import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFavourite, editItem, deleteItem } from '../../Redux/Actions';

const BeerCard = ({ item, showActions }) => {

    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        setState({
            name: item.name,
            description: item.description
        });
    }, [item.name, item.description]);

    const saveItem = () => {
        let obj = {
            id: item.id,
            name: state.name,
            description: state.description
        };
        dispatch(editItem(obj));
        setEdit(false);
    };

    return (
        <div className='beercard' key={item.name}>
            { showActions &&
                <div className='actions'>
                    <i className={`${item.favourite ? 'fas' : 'far'} fa-star`} onClick={() => dispatch(setFavourite(item.id))}></i>
                    {!edit ? <i className="fas fa-pencil-alt" onClick={() => setEdit(true)}></i> : <i className="fas fa-save" onClick={saveItem}></i>}
                    <i className="far fa-trash-alt" onClick={() => dispatch(deleteItem(item.id))}></i>
                </div>
            }
            <div className='innerCard'>
                <img src={item.image_url} alt='beer' />
                <div className='description'>
                    <input type='text' value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} disabled={!edit} />
                    <textarea value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} disabled={!edit}></textarea>
                </div>
            </div>
        </div >
    );
};

export default BeerCard;