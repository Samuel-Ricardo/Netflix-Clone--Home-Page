const  {API_KEY, API_BASE} = require("../src/config/TMDB.json")

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
                items: await basicFetch("/dicover/tv&with_network=213")
            },
            
            {
                slug: 'trending',
                title: 'Recomendados',
                items: []
            },

            {
                slug: 'top rated',
                title: 'Em Alta',
                items: []
            },

            {
                slug: 'Action',
                title: 'Ação',
                items: []
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            
            {
                slug: 'documentary',
                title: 'Documentario',
                items: []
            },
        ]
    }
}