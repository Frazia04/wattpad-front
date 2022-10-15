import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Books() {

    const[books,setbooks]=useState([])

    useEffect(()=>{
       loadBooks();

    },[]);

    const loadBooks=async()=>{
        const result=await axios.get("http://localhost:8080/books")
        setbooks(result.data);
        console.log(result.data);
    }

  return (

<Container className="feed-container">
{/* <Link className="btn btn-outline-light" to="/AddBooks">Books</Link> */}
<div className='container'>
    <div className='py-4'>
        <table className='table border shadow'>

        <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Genre</th>
      <th scope="col">Author</th>
      <th scope="col">Review</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
        books.map((books,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{books.name}</td>
            <td>{books.genre}</td>
            <td>{books.author}</td>
            <td>{books.review}</td>
          </tr> 

        ))
    }
    
  </tbody>
 </table>
  </div>
  </div>
</Container>
  );
}
  


  

