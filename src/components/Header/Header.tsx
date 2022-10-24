import { useNavigate } from "react-router-dom";
import './Header.scss';
import Logo from '../../assets/Logo.svg';
import WalletIcon from '../../assets/Wallet.svg';

const Header = () => {
    const navigate = useNavigate();

    return <div className='Header'>
        <img src={Logo} alt="Logo icon" onClick={() => navigate('/')}/>
        <div className="WalletInfoContainer">
            <div className="WalletTextContainer">
                <p className='WalletText'>Minha Carteira</p>
                <p className='WalletQuantity'>0 itens</p>
            </div>
            <img src={WalletIcon} alt="Wallet icon" onClick={() => navigate('/wallet')}/>
        </div>
    </div>
}



export default Header;