import { ReactComponent } from '*.svg'
import React from 'react'


class MovieRow extends React.Component{
    constructor(){
        this.selectMovie = this.selectMovie.bind(this)
    }


    selectMovie = () => {

        this.props.onSelect(this.props.movie)
    }

    render (){

        <div className="MovieRow--Item" onClick={this.selectMovie}>

            <img src= {`https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`} alt={this.props.itens.original_title}/>
            
        </div>
    }
}