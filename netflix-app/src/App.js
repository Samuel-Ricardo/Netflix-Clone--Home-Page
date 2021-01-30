import React, {useEffect, useState} from 'react'
const TMDB = require("../src/TMDB")

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
  
    const loadAll = async () => {
  
      let list = await TMDB.default.getHomeList()
        
      setMovieList(list)

      console.log(movieList)
      
    }
  
    loadAll()
  
  }, [])


  return(
    <div>
      Hello world
    </div>
  )
}