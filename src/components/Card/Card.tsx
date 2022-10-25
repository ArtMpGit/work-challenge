import { useContext } from 'react';
import { Item } from '../../interfaces/Item';
import icon from '../../assets/CptIcon.svg';
import Button from '../Button/Button'
import { StoreContext } from '../../contexts/StoreContext';
import './Card.scss';

const Card = ({item}: { item: Item }) => {
    const { addItemToWallet } = useContext(StoreContext);

    return <div className='Card'>
            <img src={item.image.url} className='Image' />
            <div className="TextContainer">
                <p className='Name'>{item.collection.name}</p>
                <div className="PriceContainer">
                    <img src={icon} alt="icon" />
                    <p>{item.price}</p>
                </div>
            </div>
            <p className='CardId'>#{item.id}</p>
            <Button onClick={() => addItemToWallet?.(item)}>Comprar</Button>   
        </div>
}

export default Card;