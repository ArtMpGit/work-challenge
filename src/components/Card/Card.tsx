import './Card.scss';
import icon from '../../assets/crypto-icon.svg';
import Button from '../Button/Button'

const Card = ({ id, price, imageUrl, name }: { id: number, price: number, imageUrl: string, name: string }) => {
    return <div className='Card'>
        <img src={imageUrl} className='Image' />
        <div className="TextContainer">
            <p className='Name'>{name}</p>
            <div className="PriceContainer">
                <img src={icon} alt="icon" />
                <p>{price}</p>
            </div>
        </div>
        <p className='CardId' >#{id}</p>
        <Button>Comprar</Button>
    </div>
}

export default Card;