import { useContext } from "react";
import Resume from "../../components/Resume/Resume";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import { StoreContext } from "../../contexts/StoreContext";
import './WalletPage.scss';

const WalletPage = () => {
    const { wallet } = useContext(StoreContext);

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