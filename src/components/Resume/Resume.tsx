import './Resume.scss';
import PriceIcon from '../../assets/crypto-icon.svg';
import { useContext } from 'react';
import { CURRENT_ET_VALUE, StoreContext } from '../../contexts/StoreContext';

const Resume = () => {
    const { wallet, total } = useContext(StoreContext);

    return <div className='Resume'>
        <h1>Resumo</h1>
        {
            wallet.map(({ id, price }) => (
                <div className="InfoRow">
                    <p className='Id'>#{id}</p>
                    <div className="PriceIconContainer">
                        <img src={PriceIcon} alt="Price icon" />
                        <p className='Price'>{ price.toFixed(2) }</p>
                    </div>
                    <p className='ConvertedPrice'>R${(price * CURRENT_ET_VALUE).toFixed(2)}</p>
                </div>
            ))
        }

        <div className="InfoRow TotalRow">
            <p className='Total'>Total</p>
            <div className="PriceIconContainer">
                <img src={PriceIcon} alt="Price icon" />
                <p className='Price'>{total.toFixed(2)}</p>
            </div>
            <p className='ConvertedPrice'>R${(total * CURRENT_ET_VALUE).toFixed(2)}</p>
        </div>
    </div>
}

export default Resume;