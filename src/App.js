
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Default from './Pages/Default';
import About from './Pages/About';
import Mission from './Pages/Mission';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/home/" element={<Default />} />
      <Route path="/about-us/" element={<About />} />
      <Route path="/our-mission/" element={<Mission />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
