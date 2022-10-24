import './Header.scss';
import Logo from '../../assets/Logo.svg';
import WalletIcon from '../../assets/Wallet.svg';

const Header = () => <div className='Header'>
    <img src={Logo} alt="Logo icon" />
    <div className="WalletInfoContainer">
        <div className="WalletTextContainer">
            <p className='WalletText'>Minha Carteira</p>
            <p className='WalletQuantity'>0 itens</p>
        </div>
        <img src={WalletIcon} alt="Wallet icon" />
    </div>
</div>

export default Header;