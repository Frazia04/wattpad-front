//form


import React , { useEffect, useState} from "react";
import axios from "axios";

import Homepage from "./pages/Homepage";
import Navbar from "./Navigation/Navbar";
// import "./AddBooks.css";

import { Link, useNavigate, useParams } from "react-router-dom";

// import { Button } from "react-bootstrap";

function EditBooks() {



  let navigate=useNavigate()

  const {bookid}= useParams();

  const[books,setBooks]=useState({

    
    name:"",
    genre:"",
    author:"",
    review:""

  })


const{name,genre,author,review}=books
 
  // const loadBooks=async(e) =>
  // {
  //   e.preventDefault();
  //   console.log(books);
  //   const result=await axios.post("http://localhost:8080/book",books) 
  //   navigate("/Books")
  //   console.log(result.data);
  //  }

  const handleinputs=(e)=>
  {const {name,value}=e.target;
   setBooks({...books,[name]:value});
   console.log(books);
  }

  useEffect(()=>{
    loadBooks()
  }, []);

  const onSubmit= async(e)=>{

    e.preventDefault();
      console.log(books);
      await axios.put(`http://localhost:8080/book/${bookid}`,books) 
      navigate("/Books")
     
  };

  const loadBooks = async () => {
    const result= await axios.get(`http://localhost:8080/book/${bookid}`)
    setBooks(result.data);
  }
  


  return (
    <div className="container">
      <div className="row">

      
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow " style={{backgroundColor: 'white'} }>

    <form onSubmit={(e)=>onSubmit(e)}>

  <div className="form-group">
    
      <h2 className ="text-center m-4">Edit Books</h2>

      <div className="mb-3">
    <label for="exampleFormControlInput1">Name</label>
    <div className="mb-2"></div>
    <input
     type={"name" }
     class="form-control" 
     name = "name" 
     value={books.name} 
     id="exampleFormControlInput1" 
     placeholder="Name" required 
     onChange={(e)=>handleinputs(e)}></input>

    </div>
  </div>
  
 
  <div class="form-check">
  
  
    {
         
      
      <label class="radio-inline">Genre<br></br>
      <div className="mb-2"></div>
      <input
      className="form-check-input"
       type="radio" 
       name="genre"
        value="fiction" 
        onChange={(e)=>handleinputs(e)}>
       </input>
        Fiction
        </label>
        
        }
        </div>


        <div class="form-group">
          {
            <label class="radio-inline">
            <input 
            type="radio" 
            name="genre" 
            value="non-fiction"
             onChange={(e)=>handleinputs(e)} >
            </input>
            Non-Fiction
            </label>}
          

          </div>
          
          
          <div className="mb-3"></div>  
  
 
  <div class="form-group">
  <div className="mb-3">
     {/* <label for="exampleFormControlTextarea1">Ingrediants</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>  */}

  <label 
  for="exampleFormControlTextarea1">
    Author
    </label>
  <div className="mb-2"></div>

  <input 
  type="text" 
  class="form-control" 
  name="author"
  value={books.author}
  placeholder="Author" 

  aria-label="Author"  
  required aria-describedby="button-addon2"
   onChange={(e)=>handleinputs(e)}>
  </input>

 

  </div>
  </div>
  <div class="form-group">
  <div className="mb-3">
  
    
    
  <label for="exampleFormControlTextarea1">Review</label>
  <div className="mb-2"></div>
 
  <input type="text" 
  class="form-control" 
  name="review"
  value={books.review}
  placeholder="Review" 
  aria-label="Review"  
  required 
  onChange={(e)=>handleinputs(e)}>
  </input>


  </div> 
  </div>
  
   <div class="form-group">
   <div className="mb-2"></div>
   
    <label for="exampleFormControlFile1">Upload image</label>
    
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div> 
  
  <div className="mb-4"></div>
  <div className ="text-center m-4">
    
  <button
   type="submit" 
   className="btn btn-outline-primary"
  //  onClick={(e)=>{loadBooks(e)}} 
   required
   >

    Submit
  </button>
  
 
  <button
   className="btn btn-outline-danger mx-2" to ="/Books">
    Cancel
    </button>
  </div>

  



 
</form>

  </div>
  </div>
  </div>
 



  )
}

export default EditBooks;