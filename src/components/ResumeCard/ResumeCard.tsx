import { useContext } from 'react';
import { Item } from '../../interfaces/Item';
import DeleteIcon from '../../assets/DeleteIcon.svg';
import PriceIcon from '../../assets/CptIcon.svg';
import './ResumeCard.scss'
import { StoreContext } from '../../contexts/StoreContext';

const ResumeCard = ({ item }: { item: Item }) => {
    const { removeItemFromWallet } = useContext(StoreContext);

    return <div className="ResumeCard">
            <img src={item.image.url} alt="product image" />
            <div className="InfoContainer">
                <div className="NameIconContainer">
                    <p className="Name">{item.collection.name}</p>
                    <img
                        src={DeleteIcon}
                        alt="delete icon"
                        className="DeleteIcon"
                        onClick={() => removeItemFromWallet?.(item.id)}
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