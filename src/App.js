import { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Hero/Herosection';

function App() {
 
  let heroData = [
    {text1:"Dive into",text2:"Your Passion"},
    {text1:"Indulge",text2:"Your Passion"},
    {text1:"Give in to",text2:"your Passion"},

  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setplaystatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
setHeroCount((count)=>{
  return count===2?0:count+1})
},3000);
  },[])

  return (
    <div className="App">
      <Background playStatus={playStatus} heroCount={heroCount} />
    <Navbar/>
    <Herosection 
    setplaystatus={setplaystatus}
    heroData = {heroData[heroCount]}
    heroCount= {heroCount}
    setHeroCount = {setHeroCount}
    playStatus={playStatus}
    />
    </div>
  );
}

export default App;
