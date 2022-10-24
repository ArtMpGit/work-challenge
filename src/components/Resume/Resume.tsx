import './Resume.scss';
import PriceIcon from '../../assets/crypto-icon.svg';

const Resume = () => {

    return <div className='Resume'>
        <h1>Resumo</h1>
        <div className="InfoRow">
            <p className='Id'>#225566789</p>
            <div className="PriceIconContainer">
                <img src={PriceIcon} alt="Price icon" />
                <p className='Price'>2.5</p>
            </div>
            <p className='ConvertedPrice'>R$31.671,00</p>
        </div>

        <div className="InfoRow">
            <p className='Id'>#225566789</p>
            <div className="PriceIconContainer">
                <img src={PriceIcon} alt="Price icon" />
                <p className='Price'>2.5</p>
            </div>
            <p className='ConvertedPrice'>R$31.671,00</p>
        </div>

        <div className="InfoRow TotalRow">
            <p className='Total'>Total</p>
            <div className="PriceIconContainer">
                <img src={PriceIcon} alt="Price icon" />
                <p className='Price'>2.5</p>
            </div>
            <p className='ConvertedPrice'>R$31.671,00</p>
        </div>
    </div>
}

export default Resume;