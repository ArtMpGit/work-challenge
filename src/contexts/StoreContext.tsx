import React, { useContext, useState } from 'react';
import { Item } from '../interfaces/Item';

export interface ContextProps {
    items: Array<Item>;
    wallet: Array<Item>;
    addItems?: (items: Array<Item>) => void;
    addItemToWallet?: (item: Item) => void;
    removeItemFromWallet?: (item: Item) => void;
}

export const initialState: ContextProps = {
    items: [],
    wallet: []
}

export const StoreContext = React.createContext(initialState);

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = (props: any) => {
    const [ items, setItems ] = useState<Array<Item>>([]);
    const [ wallet, setWallet ] = useState<Array<Item>>([]);

    const addItems = (items: Array<Item>) => {
        setItems(items)
    } 

    const addItemToWallet = (item: Item): void => {
        const updatedWallet = [...wallet];
        if (!updatedWallet.find(({ id }) => item.id === id)) {
            updatedWallet.push(item);
        }
        setWallet(updatedWallet);
    }

    const removeItemFromWallet = (item: Item): void => {
        const updatedWallet = [...wallet];
        const itemToDeleteId = updatedWallet.findIndex(({ id }) => item.id === id);
        if (itemToDeleteId) {
            updatedWallet.splice(itemToDeleteId, 1);
        }
        setWallet(updatedWallet);
    }

    return <StoreContext.Provider value={{ wallet,items, addItemToWallet, removeItemFromWallet, addItems }}>
          {props.children}
        </StoreContext.Provider>
};