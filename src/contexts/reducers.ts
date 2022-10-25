import { Item } from "../interfaces/Item";
import { ContextProps } from "./wallet-context";

export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const addItemToWallet = (item: Item, state: ContextProps) => {
    const wallet = state.wallet;
    
    if (!wallet.find(({ id }) => item.id === id)) {
        wallet.push(item);
    } 

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

export const storeReducer = (state:any, action: { type: string, item?: Item, items?: Array<Item>}) => {
    switch (action.type) {
        case ADD_ITEMS:
            return { ...state, items: (action.items as Array<Item>) }
        case ADD_ITEM:
            return addItemToWallet((action.item as Item), state)
        case REMOVE_ITEM:
            return removeItemFromWallet((action.item as Item), state)
        default:
            return state;
    }
};