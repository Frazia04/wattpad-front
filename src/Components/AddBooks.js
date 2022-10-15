//form


import React , { useState} from "react";
import axios from "axios";
import Homepage from "./pages/Homepage";
import Navbar from "./Navigation/Navbar";

import { Link, useNavigate } from "react-router-dom";

function AddBooks() {



  let navigate=useNavigate()

  const[books,setBooks]=useState({
    name:"",
    genre:"",
    author:"",
    review:""
  })


const{name,genre,author,review}=books
 
  const loadBooks=async(e) =>
  {
    e.preventDefault();
    console.log(books);
    const result=await axios.post("http://localhost:8080/book",books) 
    navigate("/Books")
    console.log(result.data);
   }

  const handleinputs=(e)=>
  {const {name,value}=e.target;
   setBooks({...books,[name]:value});
   console.log(books);
  }
  


  return (
    <div>
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow " style={{backgroundColor: 'white'} }>

    <form >

  <div className="form-group">
    
      <h2 className ="text-center m-4">Add Books</h2>
      <div className="mb-3">
    <label for="exampleFormControlInput1">Name</label>
    <div className="mb-2"></div>
    <input
     type="name" 
     class="form-control" 
     name = "name" 
     value={books.name} 
     id="exampleFormControlInput1" 
     placeholder="Name" required 
     onChange={handleinputs}></input>

    </div>
  </div>
 
  <div class="form-group">
  
  
    {
         
      
      <label class="radio-inline">Genre<br></br>
      <div className="mb-2"></div>
      <input
       type="radio" 
       name="genre"
        value="fiction" 
        onChange={handleinputs}>
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
             onChange={handleinputs} >
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
   onChange={handleinputs}>
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
    onChange={handleinputs}>
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
   onClick={(e)=>{loadBooks(e)}} 
   class="btn btn-primary ">
    Submit
  </button>
  
 
  <Link className="btn btn-danger mx-4" to ="/Books">
    Cancel
    </Link>
  </div>

  



 


  </form>
  </div>
</div>



  )
}

export default AddBooks;