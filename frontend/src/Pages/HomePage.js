import React from 'react';
import MovieCard from '../components/MovieCard';



const HomePage = ({myMovies}) => {
 
  return (
    <div>
      {myMovies?.map((el)=>(
        <div>
          <MovieCard  movieInfo={el}/>
       
         </div>
      ))}

        
    </div>
  )
}

export default HomePage