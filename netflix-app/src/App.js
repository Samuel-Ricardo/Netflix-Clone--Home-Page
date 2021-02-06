import React, {useEffect, useState} from 'react'

import MovieRow from "./Components/MovieRow"
import FeatureMovie from './Components/FeatureMovie'
import Header from './Components/Header'

import './App.css';

import TMDB from "../src/Connections/TMDB"



export default () => {

  const [movieLists, setMovieLists] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isHeaderBlack, setIsHeaderBlack] = useState(false)


  useEffect(() => {
  
    const loadAll = async () => {
  
      let list = await TMDB.getHomeList()
      
      console.log(list)

      setMovieLists(list)

      let original = list.filter(movieList => movieList.slug === 'original')

      let randomChosen = Math.floor(Math.random() * (original[0].items.results.length - 1 ))

      let chosen = original[0].items.results[randomChosen]
      let chosenInfo = await TMDB.getInfo(chosen.id, 'tv')

      setSelectedMovie(chosenInfo)

      console.log("ESCOLHIDO")
      console.log(chosenInfo)

    }
  
    loadAll();

  }, [])


  useEffect(()=> {

    const scrollListener = () => {

      if(window.scrollY > 50){
        setIsHeaderBlack(true)
      }else{
        setIsHeaderBlack(false)
      }

    }

    window.addEventListener('scroll',scrollListener)

    return () => {
      window.removeEventListener('scroll',scrollListener)
    }

  },[])

  return(

    <div className="Page">

      <Header isBlack={isHeaderBlack}/>

      {selectedMovie && 
        <FeatureMovie movie={selectedMovie}/>}

      <section className="Lists">

      {console.log(movieLists)}

       {movieLists.map((movieList, key) =>(
         
         <MovieRow key={key} itens={movieList.items} title={movieList.title} />
         
       ))}

      </section>
      
      <footer>
      
            <p>
                Copyright &copy; NETFLIX Brasil. Todos Direitos Reservados
            </p>

            <p>
                 &copy; Dados dos Filmes / Séries - <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'></img>
            </p>

            <p>
                 &copy; Criador: <a href="https://www.linkedin.com/in/samuel-ricardo-cabral/" target="_blank">Samuel Ricardo Cabral de Barros</a> - Programmer
           </p>

           <p>
               Dá uma olhada por aqui :)
           </p>

           <p>
            || <a href="https://www.linkedin.com/in/samuel-ricardo-cabral/" target="_blank">LinkedIn</a> || <a href="https://github.com/Samuel-Ricardo" target="_blank">GitHub</a> || <a href="https://www.upwork.com/o/profiles/users/~013ef0c3301efacbdd/" target="_blank">Upwork</a> || <a href="https://www.99freelas.com.br/user/Samuel_Ricardo" target="_blank">99Freelas</a> || 
           </p>

           <p>
           GitHub do Projeto <a href="https://github.com/Samuel-Ricardo/Netflix-Clone--Home-Page" target="_blank">Netflix-Clone</a>
           </p>

      </footer>
    </div>
  )
}