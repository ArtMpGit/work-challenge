import React from 'react';
import { Item } from '../interfaces/Item';

export interface ContextProps {
    items: Array<Item>,
    wallet: Array<Item>
}

export const initialState: ContextProps = {
    items: [],
    wallet: []
}

export default React.createContext<ContextProps>(initialState);