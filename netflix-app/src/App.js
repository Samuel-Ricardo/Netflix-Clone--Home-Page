import React, {useEffect, useState} from 'react'

import MovieRow from "./Components/MovieRow"
import FeatureMovie from './Components/FeatureMovie'

import './App.css';

import TMDB from "../src/Connections/TMDB"



export default () => {

  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
  
    const loadAll = async () => {
  
      let list = await TMDB.getHomeList()
      
      console.log(list)

      setMovieLists(list)


    }
  
    loadAll();
  
  }, [])


  return(
    <div className="Page">

    <FeatureMovie/>

      <section className="Lists">

      {console.log(movieLists)}

       {movieLists.map((movieList, key) =>(
         
         <MovieRow key={key} itens={movieList.items} title={movieList.title} />
         
       ))}

      </section>
      
    </div>
  )
}