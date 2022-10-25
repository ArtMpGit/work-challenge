import { useContext, useEffect } from "react";
import Resume from "../../components/Resume/Resume";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import { StoreContext } from "../../contexts/StoreContext";
import { Item } from "../../interfaces/Item";
import './WalletPage.scss';

const WalletPage = () => {
    const { wallet, retrievePersistedWallet, calculateTotal } = useContext(StoreContext);

    useEffect(() => {
        const persistedWallet = JSON.parse(localStorage.getItem('wallet') as string) as Array<Item>;
        retrievePersistedWallet?.(persistedWallet);
    }, []);
    
    useEffect(() => {
        calculateTotal?.();
    }, [wallet]);

    return <div className="ResumePage">
        <div className="ResumeCardsContainer">
            {
                wallet.map(item => (
                    <ResumeCard key={item.id} item={item}/>
                ))
            }
        </div>
        <Resume/>
    </div>    
}

export default WalletPage;