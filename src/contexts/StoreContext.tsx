import React, { useContext, useState } from 'react';
import { Item } from '../interfaces/Item';

export interface ContextProps {
    items: Array<Item>;
    wallet: Array<Item>;
    total: number;
    addItems?: (items: Array<Item>) => void;
    addItemToWallet?: (item: Item) => void;
    removeItemFromWallet?: (id: number) => void;
}

export const initialState: ContextProps = {
    items: [],
    wallet: [],
    total: 0
}

export const StoreContext = React.createContext(initialState);

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = (props: any) => {
    const [ items, setItems ] = useState<Array<Item>>([]);
    const [ wallet, setWallet ] = useState<Array<Item>>([]);
    const [ total, setTotal ] = useState<number>(0);

    const calculateTotal = (): void => {
        const total = wallet.reduce<number>((acc, item) => {
            return acc + item.price
        }, 0);
        setTotal(total);
    }

    const addItems = (items: Array<Item>) => {
        setItems(items)
    } 

    const addItemToWallet = (item: Item): void => {
        const updatedWallet = [...wallet];
        
        if (!updatedWallet.find(({ id }) => item.id === id)) {
            updatedWallet.push(item);
        }

        setWallet(updatedWallet);
        calculateTotal();
    }

    const removeItemFromWallet = (itemId: number): void => {
        const updatedWallet = [...wallet];
        const itemToDelete = updatedWallet.find(({ id }) => itemId === id);

        if (itemToDelete) {
            const indexToDelete = updatedWallet.findIndex(({ id }) => itemId === id) 
            updatedWallet.splice(indexToDelete, 1);
        }
        
        setWallet(updatedWallet);
        calculateTotal();
    }

    return <StoreContext.Provider value={{ wallet,items, total, addItemToWallet, removeItemFromWallet, addItems }}>
          {props.children}
        </StoreContext.Provider>
};