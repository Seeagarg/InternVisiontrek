import React,{useEffect} from 'react'
import { NavItem } from 'react-bootstrap'
import Header from './Header'
import './GenreType.css'
import { useLocation } from "react-router-dom";
import Lottie from 'lottie-react';
import loader from '../Animation/loader.json'
import { motion } from 'framer-motion';

function GenreType({Genre,category,loading}) {

    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(pathname)
    }, [pathname]);


  return (
    <div className='genre'>
    <motion.div
    initial={{y: -1000}}
    animate={{y: [-1000,50,0]}}
    transition={{
        duration:"1",
        delay:"0"
    }}
    >
    <Header/>
    </motion.div>
       
        <div className="container my-0 p-3">
        
            <h1 className='d-flex justify-content-center '>{category} Movies</h1>
            {loading?
            <div>
                {
                    Genre.map((movie,key)=>(
                        <>
                        <div className="movie-card container my-5" >
                    <div>
                    <img src={movie.backdrop_path} alt="......." className='image-card'  />
                    </div>
                    <div className='card-data'>
                    <h2 className='m-0'>{movie.title}</h2>
                    <p className='fs-5 m-0'><span className='fw-bold'>Movie Type:</span> {movie.genres.join(', ')}</p>
                    <p className=' m-0'><span className='fw-bold'>Overview: </span>{movie.overview}</p>
                    <p className=' m-0'><span className='fw-bold'>Released On: </span>{movie.release_date} </p>
                    </div>
                    </div>
                        </>
                    ))
                    
                }
            </div>
            :
            <div className='animation'>
            <Lottie 
                    animationData = {loader}
                    loop = {true}
                    autoplay={true}
                    
                    className='lottie'
              />
              </div>
            }
            
            
        </div>
    </div>
  )
}

export default GenreType
