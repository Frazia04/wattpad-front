import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';

import { Link, useParams } from 'react-router-dom';



export default function Books() {

    const[books,setbooks]=useState([]);

    const {bookid}= useParams();

    useEffect(()=>{
       loadBooks();

    },[]);

    const loadBooks=async()=>{
        const result=await axios.get("http://localhost:8080/books")
        setbooks(result.data);
        console.log(result.data);
    }

    const deleteBook=async(bookid)=>{
      await axios.delete(`http://localhost:8080/book/${bookid}`)
      loadBooks();
    }

  return (

<Container className="feed-container">
{/* <Link className="btn btn-outline-light" to="/AddBooks">Books</Link> */}
<div className='container'>
    <div className='py-4'>
      <div className='table-responsive'>
        <table className='table  table-hover border shadow'>
        <caption>List of Books</caption>
        <thead className='thead-dark'>
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
            <td> {books.review}</td>
            <td>
<Link type="button" class="btn btn-secondary mx-2"  style={{textDecoration: 'none'}} to={`/ViewBooks/${books.bookid}`}>View</Link>
<Link  className="btn btn-light mx-2" style={{textDecoration: 'none'}}  to={`/EditBooks/${books.bookid}`}>Edit</Link>
<button type="button" class="btn btn-dark mx-2"
onClick={()=>deleteBook(books.bookid)}>Delete</button>

       
       
            </td>
          </tr> 

        ))
    }
    
  </tbody>
 </table>
 </div>
  </div>
  </div>
</Container>
  );
}
  


  

