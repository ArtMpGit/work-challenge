import { useState } from "react";
import { Item } from "../interfaces/Item";
import { ContextProps } from "./StoreContext";

export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const addItems = (state: ContextProps, items: Array<Item>) => {
    console.log(items)
    return { ...state, items };
}

const addItemToWallet = (item: Item, state: ContextProps) => {
    const wallet = state.wallet;
    
    if (!wallet.find(({ id }) => item.id === id)) {
        wallet.push(item);
    } 
    console.log(state)
    return { ...state, wallet };
}

const removeItemFromWallet = (item: Item, state: ContextProps) => {
    const wallet = state.wallet;
    
    if (wallet.length > 0) {
        const updatedItemIndex = wallet.findIndex(({ id }) => id === item.id);
        wallet.splice(updatedItemIndex, 1); 
    }

    return { ...state, wallet };
}

export const storeReducer = (state: ContextProps, action: { type: string, item?: Item, items?: Array<Item>}) => {
    switch (action.type) {
        case ADD_ITEMS:
            return addItems(state, (action.items as Array<Item>));
        case ADD_ITEM:
            return addItemToWallet((action.item as Item), state);
        case REMOVE_ITEM:
            return removeItemFromWallet((action.item as Item), state);
        default:
            return state;
    }
};