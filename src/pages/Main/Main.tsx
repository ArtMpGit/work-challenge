import { useContext, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { StoreContext } from '../../contexts/StoreContext';
import { Item } from '../../interfaces/Item';
import { getAllItems } from '../../services/ItemsService';
import './Main.scss';

const MainPage = () => {
    const { addItems, items, retrievePersistedWallet } = useContext(StoreContext);

    useEffect(() => {
        getAllItems().then(addItems);
        const persistedWallet = JSON.parse(localStorage.getItem('wallet') as string) as Array<Item>;
        if (persistedWallet) {
            retrievePersistedWallet?.(persistedWallet);
        }
    }, []);

    return <div className='MainPage'>
        {items.map((item) => 
            <Card key={item.id} item={item}/>
        )}
    </div>
}

export default MainPage;