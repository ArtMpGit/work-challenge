import './Resume.scss';
import PriceIcon from '../../assets/crypto-icon.svg';
import { useContext } from 'react';
import { StoreContext } from '../../contexts/StoreContext';

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
                        <p className='Price'>{ price }</p>
                    </div>
                    <p className='ConvertedPrice'>R$31.671,00</p>
                </div>
            ))
        }

        <div className="InfoRow TotalRow">
            <p className='Total'>Total</p>
            <div className="PriceIconContainer">
                <img src={PriceIcon} alt="Price icon" />
                <p className='Price'>{total}</p>
            </div>
            <p className='ConvertedPrice'>R$31.671,00</p>
        </div>
    </div>
}

export default Resume;