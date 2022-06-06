
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { Suspense } from 'react';
import About from './Pages/About';
import Mission from './Pages/Mission';
import LoadingSpiner from './Components/LoadingSpiner';

const Default = React.lazy(() => import('./Pages/Default'));

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Suspense fallback={
          <div className="txt-center">
             <LoadingSpiner />
          </div>
        }>

    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/home/" element={<Default />} />
      <Route path="/about-us/" element={<About />} />
      <Route path="/our-mission/" element={<Mission />} />
    </Routes>
    </Suspense>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
