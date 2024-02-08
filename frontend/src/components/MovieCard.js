import React from 'react';
import Rating from '@mui/material/Rating';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import{useDispatch}from'react-redux';
import { deleteMovie } from '../Redux/movieSlice';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
const MovieCard = ({movieInfo}) => {
   
  const dispatch=useDispatch();


  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieInfo.posterUrl} />
      <Card.Body>
        <Card.Title style={{color:'gray'}}>{movieInfo.movieTitle}</Card.Title>
        <Card.Text>
        <h6>Description:</h6>{movieInfo.descreption}
        </Card.Text>
        <Card.Text>
          <h6>Category:</h6>
        {movieInfo.category}
        </Card.Text>

        {/* <Card.Text>
        <h6>Trailer:</h6>
          <iframe src={movieInfo.trailler} width="150" height="150" title='youtube video'></iframe>
          
        
        </Card.Text> */}
        
      </Card.Body>

      <Rating name="read-only"  readOnly 
      max={10} 
      value={movieInfo.rate}/>

      <Button variant='primary'
       onClick={()=>{
        dispatch(deleteMovie(movieInfo._id))
      }}>Delete</Button>

      <Link to={`/new/${movieInfo._id}`}>
      <Button variant='secondary'>Update</Button>
      </Link>
      <Link to={"/profile"}>
        <FavoriteIcon style={{color:"red"}}/>
      </Link>
    
    </Card>
    </div>
  )
}

export default MovieCard