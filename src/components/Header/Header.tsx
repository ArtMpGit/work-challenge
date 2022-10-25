import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.svg';
import WalletIcon from '../../assets/Wallet.svg';
import { StoreContext } from "../../contexts/StoreContext";
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();
    const { wallet } = useContext(StoreContext);

    return <div className='Header'>
            <img src={Logo} alt="Logo icon" onClick={() => navigate('/')}/>
            <div className="WalletInfoContainer">
                <div className="WalletTextContainer">
                    <p className='WalletText'>Minha Carteira</p>
                    <p className='WalletQuantity'>{ wallet.length } itens</p>
                </div>
                <img src={WalletIcon} alt="Wallet icon" onClick={() => navigate('/wallet')}/>
            </div>
        </div>
}

export default Header;