import React, { useState, useEffect } from 'react';
import { getAllItems } from '../../services/ItemsService';
import './Main.scss';
import Card from '../../components/Card/Card';
import { Item } from '../../interfaces/Item';

const MainPage = () => {
    const [items, setItems] = useState<Array<Item>>([]);

    useEffect(() => {
        getAllItems().then(setItems);
    }, []);

    return <div className='MainPage'>
        {items.map(({ price, id, image, collection }) => 
            <Card key={id} id={id} name={collection?.name} price={price} imageUrl={image.url}/>
        )}
    </div>
}

export default MainPage;