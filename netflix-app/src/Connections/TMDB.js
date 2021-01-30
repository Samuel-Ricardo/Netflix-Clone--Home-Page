const  {API_KEY, API_BASE} = require("../config/TMDB.json")
const CONFIG = `api_key=${API_KEY}&language=pt-BR`

const basicFetch = async (endPoint) => {

    const req = await fetch(`${API_BASE}${endPoint}`)
    const json = await req.json();

    return json
}

export default {

    getHomeList: async () => {

        return [
    
            {
                slug: 'original',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?${CONFIG}&with_network=213`)
            },
            
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?${CONFIG}`)
            },
    
            {
                slug: 'top rated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${CONFIG}`)
            },
    
            {
                slug: 'Action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${CONFIG}`)
            },
    
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&${CONFIG}`)
            },
            
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${CONFIG}`)
            },
            
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${CONFIG}`)
            },
            
            {
                slug: 'documentary',
                title: 'Documentario',
                items: await basicFetch(`/discover/movie?with_genres=99&${CONFIG}`)
            },
        ];
    }
    
}