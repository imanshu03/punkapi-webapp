import { SET_ITEMS, SET_FAVOURITE, EDIT_ITEM, DELETE_ITEM, SEARCH_ITEM, CLEAR_ITEMS } from './Actions';

export const setItemReducer = (state = [], action) => {
    switch (action.type) {
        case SET_ITEMS: return [...new Set([...state, ...action.items])];

        case CLEAR_ITEMS: return [];

        case EDIT_ITEM: return [...state.map(item => {
            if (item.id === action.item.id) {
                item.name = action.item.name;
                item.description = action.item.description;
            }
            return item;
        })];

        case DELETE_ITEM: return [...state.filter(item => item.id !== action.id)];

        case SET_FAVOURITE: return [...state.map(item => {
            if (item.id === action.id) {
                item.favourite = !item.favourite;
            }
            return item;
        })];

        case SEARCH_ITEM: return [...action.items];

        default: return state;
    }
};