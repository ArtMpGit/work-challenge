import { useReducer } from 'react';
import { Item } from '../../interfaces/Item';
import DeleteIcon from '../../assets/DeleteIcon.svg';
import PriceIcon from '../../assets/crypto-icon.svg';
import './ResumeCard.scss'
import { REMOVE_ITEM, storeReducer } from '../../contexts/reducers';
import { initialState } from '../../contexts/StoreContext';

const ResumeCard = ({ item }: { item: Item }) => {
    const [ state, dispatch ] = useReducer(storeReducer, initialState);
    
    return <div className="ResumeCard">
            <img src={item.image.url} alt="product image" />
            <div className="InfoContainer">
                <div className="NameIconContainer">
                    <p className="Name">{item.collection.name}</p>
                    <img 
                        src={DeleteIcon} 
                        alt="delete icon" 
                        className="DeleteIcon" 
                        onClick={() => dispatch({ type: REMOVE_ITEM, item })}
                    />
                </div>
                <p className="Id">#{item.id}</p>
                <div className="IconPriceContainer">
                    <img src={PriceIcon} alt="price icon" />
                    <p className="Price">{item.price}</p>
                </div>
            </div>
        </div>
}

export default ResumeCard;