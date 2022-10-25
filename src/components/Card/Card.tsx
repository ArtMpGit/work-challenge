import { useReducer } from 'react';
import { Item } from '../../interfaces/Item';
import icon from '../../assets/crypto-icon.svg';
import Button from '../Button/Button'
import { ADD_ITEM, storeReducer } from '../../contexts/reducers';
import { initialState } from '../../contexts/wallet-context';
import './Card.scss';

const Card = ({item}: { item: Item }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);

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
            <Button onClick={() => dispatch({ type: ADD_ITEM, item })}>Comprar</Button>
        </div>
}

export default Card;