import { useContext } from "react";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import StoreContext from '../../contexts/wallet-context';
import './WalletPage.scss';

const WalletPage = () => {
    const context = useContext(StoreContext);

    return <div className="ResumePage">
        {
            context.wallet.map(item => (
                <ResumeCard key={item.id} item={item}/>
            ))
        }
    </div>    
}

export default WalletPage;