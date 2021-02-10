import React from 'react'
import './MovieItem.css'

export default class MovieItem extends React.Component{

    constructor(){
        super()
        
        this.selectMovie = this.selectMovie.bind(this)
    }


    selectMovie = () => {

        this.props.select(this.props.movie)
    }

    render (){

        return(
            <div className="MovieRow--Item" onClick={this.selectMovie}>

                <img src= {`https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`} alt={this.props.itens.original_title}/>
            
            </div>
        )
    }
}


 