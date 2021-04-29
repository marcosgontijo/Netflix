const API_KEY = '4d5d6edffb7c38371abddabc1d6fd393'; 
const API_BASE = 'https://api.themoviedb.org/3';


/*
- Originais da netflix
- recomendados que seria destaque 
- os melhores votados top rated
-lista de filmes de ação
-comedia
-terror
-romance
-documentario 

cada um desses é uma consulta diferente


*/

const basicFetch = async (endpoint) => {
   
    const req = await fetch(`${API_BASE}${endpoint}`);
   /*
    Linha acima faz uma requisição para obter uma resposta ( await) que seria espere a resposta do cara para ir para o proximo, e preencha em itens
   */
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'commedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
        
        ];
    }

}