import React from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
const MyProfile = (movieInfo) => {
    const dispatch=useDispatch();
  
 const {id}=useParams();
 const {myMovies}=useSelector((state)=>state.movie);
 const specifecMovie=myMovies?.filter((el)=>el._id===id)

  return (
    <div>
helo
    </div>
  )
}

export default MyProfile