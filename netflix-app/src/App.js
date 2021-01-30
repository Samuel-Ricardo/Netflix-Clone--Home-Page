import React, {useEffect, useState} from 'react'

import MovieRow from "./Components/MovieRow/MovieRow"

const TMDB = require("../src/TMDB")


export default () => {

  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
  
    const loadAll = async () => {
  
      let list = await TMDB.default.getHomeList()
      
      console.log(list)

      setMovieLists(list)


    }
  
    loadAll();
  
  }, [])


  return(
    <div className="Page">

      <section className="Lists">

      {console.log(movieLists)}

       {movieLists.map((movieList, key) =>(
         
         <MovieRow key={key} itens={movieList.items} title={movieList.title} />
         
       ))}

      </section>
      
    </div>
  )
}