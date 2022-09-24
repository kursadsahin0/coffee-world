import Navbar from './components/Navbar';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import './App.css';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div >
    {
     
      loading ?
      <div className='App-header'>
      <BeatLoader

      color={"#F37A24"} loading={loading}  size={30} className="beat"  /> </div>
      :
      <>
     <Navbar/>
     <Home/>
     <Footer/>
     </>
    }
   
  </div>
  
  );
}

export default App;
