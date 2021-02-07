import React from 'react'
import './MovieRow.css'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default ({title, itens}) => {
    
    return(
        <div className="MovieRow">

          <div className="MovieRow--rigth">
            <NavigateNextIcon style={{fontSize: 50}}/>
          </div>

          <div className="MovieRow--left">
            <NavigateBeforeIcon style={{fontSize: 50}}/>
          </div>

          <h2 className="Title">{title}</h2>

          <div className="MovieRow--ListArea">
            <div className="MovieRow--List">

            {itens.results.length > 0 && itens.results.map((movie, key) => (

              <div className="MovieRow--Item">
                <img src= {`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={itens.original_title}/>
              </div>
              
            ))}

            </div>
          </div>
        </div>
    )
}