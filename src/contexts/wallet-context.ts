import React from 'react';
import { Item } from '../interfaces/Item';

export interface ContextProps {
    items: Array<Item>,
    wallet: Array<Item>,
    addItemToWallet: Function,
    addItems: Function,
    removeItemFromWallet: Function
}

export const initialState: ContextProps = {
    items: [],
    wallet: [],
    addItemToWallet: (item: Item) => {},
    addItems: (items: Array<Item>) => {},
    removeItemFromWallet: (item: Item) => {}
}

export default React.createContext<ContextProps>(initialState);