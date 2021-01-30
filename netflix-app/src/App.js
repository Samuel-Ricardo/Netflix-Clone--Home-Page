import React, {useEffect, useState} from 'react'
const TMDB = require("../src/TMDB")

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
  
    const loadAll = async () => {
  
      let list = await TMDB.default.getHomeList()
  
      console.log(list)
      setMovieList(list)
      
    }
  
    loadAll()
  
  }, [])


  return(
    <div>
      Hello word
    </div>
  )
}