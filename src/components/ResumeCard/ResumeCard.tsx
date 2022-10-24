import DeleteIcon from '../../assets/DeleteIcon.svg';
import PriceIcon from '../../assets/crypto-icon.svg';
import './ResumeCard.scss'

const ResumeCard = ({ imageUrl, name, id, price }: { imageUrl: string, name: string, id: number, price: number }) => 
<div className="ResumeCard">
    <img src={imageUrl} alt="product image" />
    <div className="InfoContainer">
        <div className="NameIconContainer">
            <p className="Name">{name}</p>
            <img src={DeleteIcon} alt="delete icon" className="DeleteIcon" />
        </div>
        <p className="Id">#{id}</p>
        <div className="IconPriceContainer">
            <img src={PriceIcon} alt="price icon" />
            <p className="Price">{price}</p>
        </div>
    </div>
</div>

export default ResumeCard;