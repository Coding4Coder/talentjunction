
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Default from './Pages/Default';
import About from './Pages/About';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/home/" element={<Default />} />
      <Route path="/about-us/" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
