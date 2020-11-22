export const SET_ITEMS = 'SET_ITEMS';
export const SET_FAVOURITE = 'SET_FAVOURITE';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SEARCH_ITEM = 'SEARCH_ITEM';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

export const setItems = (items) => (
    {
        type: SET_ITEMS,
        items
    }
);

export const setFavourite = (id) => (
    {
        type: SET_FAVOURITE,
        id
    }
);

export const editItem = (item) => (
    {
        type: EDIT_ITEM,
        item
    }
);

export const deleteItem = (id) => (
    {
        type: DELETE_ITEM,
        id
    }
);

export const clearItems = () => (
    {
        type: CLEAR_ITEMS
    }
);

export const setSearchItems = (items) => (
    {
        type: SEARCH_ITEM,
        items
    }
);