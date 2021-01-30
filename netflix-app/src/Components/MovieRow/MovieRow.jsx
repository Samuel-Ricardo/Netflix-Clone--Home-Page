import React from 'react'

export default ({title, itens}) => {
    
    return(
        <div>
          <h2>{title}</h2>
          <div className="movieRow--listArea">
            
            {itens.results.length > 0 && itens.results.map((movie, key) => (

              <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={itens.original_title}/>
            ))}

          </div>
        </div>
    )
}