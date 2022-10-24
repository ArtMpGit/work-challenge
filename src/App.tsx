import './App.scss';
import NftCard from './components/NftCard/NftCard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"  
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NftCard id={225382127} price={0.01} imageUrl='https://img.seadn.io/files/9e841b77bd66373b9699ecad6e962d61.png?auto=format' name='Azuki'/>
    </div>
  );
}

export default App;
