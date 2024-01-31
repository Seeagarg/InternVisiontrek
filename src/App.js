import react,{useState,useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Popular from './Components/Popular';
import TarrifPlans from './Components/TarrifPlans';
import Faq from './Components/Faq';
import Subscription from './Components/Subscription';
import GenreType from './Components/GenreType';
import { Routes,Route } from 'react-router-dom';
import Home from './Screens/Home';

function App() {

  const [data,setData] = useState([]);
  const [crimeData,setCrimeData] = useState([]);
  const [romanceData,setRomanceData] = useState([]);
  const [cartoonData,setCartoonData] = useState([]);
  const [horrorData,setHorrorData] = useState([]);
  const [historyData,setHistoryData] = useState([]);
  const [loading,setLoading] = useState(false);


  const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/movies',
    headers: {
      'X-RapidAPI-Key': 'a2d043ee55msh4a4cb903bc9f079p140ea9jsnc74c80668172',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
  };

  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await axios.request(options);
          setData(response.data.movies)
          setLoading(true);
          console.log(response.data.movies);
        console.log(response.data);
      } 
      catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])

  useEffect(()=>{
    const genere = "Crime";
    const filtered = data.filter(item => item.genres.includes(genere));
    setCrimeData(filtered);
  },[data])

  useEffect(()=>{
    const genere = "Romance";
    const filtered = data.filter(item => item.genres.includes(genere));
    setRomanceData(filtered);
  },[data])

  useEffect(()=>{
    const genere = "Animation";
    const filtered = data.filter(item => item.genres.includes(genere));
    setCartoonData(filtered);
  },[data])

  useEffect(()=>{
    const genere = "Horror";
    const filtered = data.filter(item => item.genres.includes(genere));
    setHorrorData(filtered);
  },[data])

  useEffect(()=>{
    const genere = "History";
    const filtered = data.filter(item => item.genres.includes(genere));
    setHistoryData(filtered);
  },[data])


  return (
    <div className='bg-black text-light'>
    <Routes>
      <Route path ='/' element={<Home crimeData={crimeData} historyData={historyData} horrorData={horrorData} cartoonData={cartoonData} romanceData={romanceData} loading={loading}/>} />
      <Route path ='/crime' element={<GenreType Genre={crimeData} loading={loading} category="Crime"/> }/>
      <Route path ='/horror' element={<GenreType Genre={horrorData} loading={loading} category="Horror"/>}/>
      <Route path ='/romantic' element={<GenreType Genre={romanceData} loading={loading} category="Romantic"/>}/>
      <Route path ='/history' element={<GenreType Genre={historyData} loading={loading} category="Historical"/>}/>
      <Route path ='/animation' element={<GenreType Genre={cartoonData} loading={loading} category="Cartoon or Animation"/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
