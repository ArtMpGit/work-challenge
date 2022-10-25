import { useContext } from "react";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import { StoreContext } from "../../contexts/StoreContext";
import './WalletPage.scss';

const WalletPage = () => {
    const { wallet } = useContext(StoreContext);

    return <div className="ResumePage">
        {
            wallet.map(item => (
                <ResumeCard key={item.id} item={item}/>
            ))
        }
    </div>    
}

export default WalletPage;