import React, {useEffect, useState} from 'react'

import MovieRow from "./Components/MovieRow"
import FeatureMovie from './Components/FeatureMovie'

import './App.css';

import TMDB from "../src/Connections/TMDB"



export default () => {

  const [movieLists, setMovieLists] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)


  useEffect(() => {
  
    const loadAll = async () => {
  
      let list = await TMDB.getHomeList()
      
      console.log(list)

      setMovieLists(list)

      let original = list.filter(movieList => movieList.slug === 'original')
      let randomChosen = Math.floor(Math.random() * (original[0].items.results.length - 1 ))
      let chosen = original[0].items.results[randomChosen]
      let chosenInfo = await TMDB.getInfo(chosen.id, 'tv')

      console.log("ESCOLHIDO")
      console.log(chosen)

    }
  
    loadAll();
  
  }, [])


  return(
    <div className="Page">

      {selectedMovie && 
        <FeatureMovie movie={selectedMovie}/>}

      <section className="Lists">

      {console.log(movieLists)}

       {movieLists.map((movieList, key) =>(
         
         <MovieRow key={key} itens={movieList.items} title={movieList.title} />
         
       ))}

      </section>
      
    </div>
  )
}