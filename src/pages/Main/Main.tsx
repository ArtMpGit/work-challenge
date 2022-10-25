import { useContext, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { StoreContext } from '../../contexts/StoreContext';
import { getAllItems } from '../../services/ItemsService';
import './Main.scss';

const MainPage = () => {
    const { addItems, items } = useContext(StoreContext);

    useEffect(() => {
        getAllItems().then(addItems);
    }, []);

    return <div className='MainPage'>
        {items.map((item) => 
            <Card key={item.id} item={item}/>
        )}
    </div>
}

export default MainPage;