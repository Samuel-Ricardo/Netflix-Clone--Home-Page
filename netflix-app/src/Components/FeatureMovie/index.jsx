import React, { useState } from 'react';

import './FeatureMovie.css';

export default ({movie}) =>{

    const [movieDate, setmovieDate] = useState(new Date(movie.first_air_date))

    const [genres, setGenres] = useState([])



    for (let cont in movie.genres) {

        while(genres.length > 0) {
            genres.pop();
        }

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

            <div className="Featured--Name">
                {movie.original_name}
            </div>

            <div className="Featured--Info">
                <div className="Featured--Rated">
                {movie.vote_average * 10}%
                </div>

                <div className="Featured--Year">
                    {movieDate.getFullYear()}
                </div>

                <div className="Featured--Seasons">
                    {movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? "s" : ''}
                </div>
            </div>

            <div className="Featured--Description">
              {movie.overview}
            </div>

            <div className="Featured--Buttons">

                <a href={`/wacht/${movie.id}`} className="Featured--WatchButton"> ► Play</a>
                <a href={`/list/add/${movie.id}`} className="Featured--MyListButton"> + Minha Lista</a>

            </div>

            <div className="Featured--Genres">
                <strong>Genres: </strong>{genres.join(', ')}
            </div>
        </div>
    </div>

    </section>
 )
}
