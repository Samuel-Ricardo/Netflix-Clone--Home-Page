const   API_KEY = '07de60cc832a7924590b50bb4e03689d';
const API_BASE = 'https://api.themoviedb.org/3';


export default {

    getHomeList: async () => {

        return [
            
            {
                slug: 'original',
                title: 'originais da netflix',
                items: []
            }
        ]
    }
}