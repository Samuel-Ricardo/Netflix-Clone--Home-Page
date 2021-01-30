import React from 'react'
import './MovieRow.css'

export default ({title, itens}) => {
    
    return(
        <div className="MovieRow">

          <h2 className="Title">{title}</h2>

          <div className="MovieRow--ListArea">
            <div className="MovieRow--List">

            {itens.results.length > 0 && itens.results.map((movie, key) => (

              <div className="MovieRow--Item">
                <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={itens.original_title}/>
              </div>
              
            ))}

            </div>
          </div>
        </div>
    )
}