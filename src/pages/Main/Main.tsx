import { useContext } from 'react';
import Context from '../../contexts/wallet-context';
import Card from '../../components/Card/Card';
import './Main.scss';

const MainPage = () => {
    const context = useContext(Context);

    return <div className='MainPage'>
        {context.items.map((item) => 
            <Card key={item.id} item={item}/>
        )}
    </div>
}

export default MainPage;