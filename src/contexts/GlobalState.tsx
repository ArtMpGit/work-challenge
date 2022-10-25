import { useReducer, useEffect } from 'react';
import WalletContext, { initialState } from './wallet-context';
import { storeReducer, ADD_ITEMS } from './reducers';
import { getAllItems } from '../services/ItemsService';

const GlobalState = (props: any) => {
    const [storeState, dispatch] = useReducer(storeReducer, initialState);

    /** Making the API call and dispatching the add items function to save the the API responde 
     * for it to be used on children components */
    useEffect(() => {
        getAllItems().then(items => dispatch({ type: ADD_ITEMS, items }));
    }, []);

    return <WalletContext.Provider value={{ ...storeState }}>
        {props.children}
    </WalletContext.Provider>
}

export default GlobalState;