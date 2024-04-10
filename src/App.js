import './App.css';
import DestinationLove from './Components/DestinationLove';
import Header from './Components/Header';
import Inspiration from './Components/Inspiration';
import Offer from './Components/Offer';
import Trending from './Components/Trending';
import Savetime from './Components/Savetime';
import Property from './Components/Property';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Offer />
      <Trending />
      <Inspiration />
      <DestinationLove />
      <Savetime />
      <Property />
      <Footer />
    </div>
  );
}

export default App;
