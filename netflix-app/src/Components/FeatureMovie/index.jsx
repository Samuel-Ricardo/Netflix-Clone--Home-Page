import React from 'react';

import './FeatureMovie.css';

export default ({movie}) => (

    <section className="Featured" style={{
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
    }}>

    <div className="Featured-Vertical-Gradient">
        <div className="Featured-Horizontal-Gradient">

        </div>
    </div>

    </section>
)