import React from 'react'
import './MovieRow.css'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default ({title, itens}) => {

  const [scrollX, setScrollX] = React.useState(0)
  
  const handlerLeftArrow = () => {

    let x = scrollX + Math.round(window.innerWidth / 2)

    if(x > 0){
      
      x = 0
    }

    setScrollX(x)
  }

  

    return(
        <div className="MovieRow">

          <div className="MovieRow--Right" onClick={handlerRightArrow}>
            <NavigateNextIcon style={{fontSize: 50}}/>
          </div>

          <div className="MovieRow--Left" onClick={handlerLeftArrow}>
            <NavigateBeforeIcon style={{fontSize: 50}}/>
          </div>

          <h2 className="Title">{title}</h2>

          <div className="MovieRow--ListArea">
            <div className="MovieRow--List"
            
              style={{
                width : itens.results.length * 150,
                marginLeft: scrollX
              }}
            >

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