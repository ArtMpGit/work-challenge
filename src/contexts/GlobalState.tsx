import { useReducer, useEffect } from 'react';
import WalletContext, { initialState } from './wallet-context';
import { storeReducer, ADD_ITEM, REMOVE_ITEM, ADD_ITEMS } from './reducers';
import { Item } from '../interfaces/Item';
import { getAllItems } from '../services/ItemsService';

const GlobalState = (props: any) => {
    const [walletState, dispatch] = useReducer(storeReducer, initialState);
    const { items } = walletState;

    /** Making the API call and dispatching the add items function to save the the API responde 
     * for it to be used on children components */
    useEffect(() => {
        getAllItems().then(items => dispatch({ type: ADD_ITEMS, items }));
    }, []);

    const addItemToWallet = (item: Item) => { dispatch({ type: ADD_ITEM, item }) };
    const removeItemFromWallet = (item: Item) => { dispatch({ type:REMOVE_ITEM, item }) };
    const addItems = (items: Array<Item>) => {dispatch({ type:ADD_ITEMS, items })};

    return <WalletContext.Provider
        value={{
            items,
            wallet: walletState.wallet,
            addItemToWallet,
            addItems,
            removeItemFromWallet
        }}
    >
        {props.children}
    </WalletContext.Provider>
}

export default GlobalState;