import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link , useNavigate, useParams} from 'react-router-dom'

export default function ViewBooks() {

    let navigate=useNavigate();


    const[books,setBooks]=useState({
        name:"",
        genre:"",
        author:"",
        review:""
      })

      const {bookid} = useParams();

      useEffect(()=>{
        loadBooks()
      }, [])

      const loadBooks=async ()=>{
        const result=await axios.get(`http://localhost:8080/book/${bookid}`);
        setBooks(result.data);
      }


  return (
    <div className="container">
      <div className="row">

      
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow " style={{backgroundColor: 'white'} }>
      <h2 className ="text-center m-4">Books</h2>

      <div className='card'>

        <div className='card-header'>
            Details of book :{books.bookid}
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Name: </b>
                  {books.name}

                </li>
                <li className='list-group-item'>
                  <b>Genre: </b>
                  {books.genre}

                </li>
                <li className='list-group-item'>
                  <b>Author: </b>
                  {books.author}

                </li>
                <li className='list-group-item'>
                  <b>Review: </b>
                  {books.review}

                </li>

            </ul>
        </div>
      </div>

      <Link className='btn btn-primary my-2'style={{textDecoration: 'none'}}  to={"/"}>Back to Home</Link>

           
      </div>
      </div>
      </div>
  
  )
}
