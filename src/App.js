import './index.css'
import NavBar from '../src/view/components/NavBar'
import ContactLine from './view/components/ContactLine';
import Footer from './view/components/Footer';

function App() {
  return (
    <div>
      <ContactLine/>
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
