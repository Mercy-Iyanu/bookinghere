import './App.css';
import Header from './Components/Header';
import Offer from './Components/Offer';
import Trending from './Components/Trending';

function App() {
  return (
    <div className='container-fluid'>
      <Offer />
      <Trending />
    </div>
  );
}

export default App;
