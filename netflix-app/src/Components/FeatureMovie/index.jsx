import React from 'react';

import './FeatureMovie.css';

export default ({movie}) =>{
    
    const movieDate = new Date(movie.first_air_date)
    const genres = []

    for (let cont in movie.genres ){
        genres.push(movie.genres[cont].name)
    }

    return (


    

    <section className="Featured" style={{
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    }}>

    <div className="Featured--Vertical-Gradient">
        <div className="Featured--Horizontal-Gradient">

            <div className="Featured--name">
                {movie.original_name}
            </div>

            <div className="Featured--info">
                <div className="Featured--rated">
                {movie.vote_average * 10}%
                </div>

                <div className="Featured--year">
                    {movieDate.getFullYear}
                </div>

                <div className="Featured--seasons">
                    {movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}
                </div>
            </div>

            <div className="Featured--description">
              {movie.overview}  
            </div>

            <div className="Featured--buttons">
                
                <a href={`/wacht/${movie.id}`}>► Play</a>
                <a href={`/list/add/${movie.id}`}>+ Minha Lista</a>
                
            </div>

            <div className="Featured--gneres">
                <strong>Genres: </strong>{genres.join(', ')}
            </div>
        </div>
    </div>

    </section>
 )
}