import './App.scss';
import Header from './components/Header/Header';
import MainPage from './pages/Main/Main';
import WalletPage from './pages/Wallet/WalletPage';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/wallet' element={<WalletPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
