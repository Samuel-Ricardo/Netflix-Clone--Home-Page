const   API_KEY = '07de60cc832a7924590b50bb4e03689d';
const API_BASE = 'https://api.themoviedb.org/3';


export default {

    getHomeList: async () => {

        return [

            {
                slug: 'original',
                title: 'Originais da Netflix',
                items: []
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