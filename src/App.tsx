import './App.scss';
import Header from './components/Header/Header';
import MainPage from './pages/Main/Main';
import WalletPage from './pages/Wallet/WalletPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreContextProvider } from './contexts/StoreContext';
function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/wallet' element={<WalletPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </StoreContextProvider>
    </div>
  );
}

export default App;
