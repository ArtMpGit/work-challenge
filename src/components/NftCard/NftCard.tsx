import './NftCard.scss';
import icon from '../../assets/crypto-icon.svg';
import Button from '../Button/Button'

const NftCard = ({ id, price, imageUrl, name }: { id: number, price: number, imageUrl: string, name: string }) => {
    return <div className='Card'>
        <img src={imageUrl} className='NftImage' />
        <div className="TextContainer">
            <p className='NftName'>{name}</p>
            <div className="NftPriceContainer">
                <img src={icon} alt="crypto icon" />
                <p>{price}</p>
            </div>
        </div>
        <p className='NftId' >#{id}</p>
        <Button>Comprar</Button>
    </div>
}

export default NftCard;