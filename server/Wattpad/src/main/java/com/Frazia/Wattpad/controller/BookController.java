package com.Frazia.Wattpad.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Frazia.Wattpad.Model.Book;
import com.Frazia.Wattpad.exception.BookNotFoundException;
import com.Frazia.Wattpad.repository.BookRepository;




@RestController
@CrossOrigin("http://localhost:3000" )

public class BookController {
     


	@Autowired
	private BookRepository bookrepository;
	
	@PostMapping("/book")
	Book Newbook(@RequestBody Book Newbook) {
		return bookrepository.save(Newbook);
		
	}
	
	@GetMapping("/books")
	List<Book> getAllPosts(){
		return bookrepository.findAll();
	}
	
	@GetMapping("/book/{bookid}")
	Book getBookByID(@PathVariable Long bookid) {
		return bookrepository.findById(bookid)
				.orElseThrow(()-> new BookNotFoundException(bookid));
	}
	
	@PutMapping("/book/{bookid}")
	Book updateBook(@RequestBody Book newBook,@PathVariable Long bookid) {
		return bookrepository.findById(bookid)
				.map(book -> {
					book.setname(newBook.getname());
					book.setGenre(newBook.getgenre());
					book.setauthor(newBook.getauthor());
					book.setreview(newBook.getreview());
					return bookrepository.save(book);
				}).orElseThrow(()-> new BookNotFoundException(bookid));
				
	}
	
	@DeleteMapping("/book/{bookid}")
	String deleteBook(@PathVariable Long bookid) {
		if(!bookrepository.existsById(bookid)) {
			throw new BookNotFoundException(bookid);
		}
		bookrepository.deleteById(bookid);
		return "Book with id "+bookid+" has been deleted successfully.";
	}
	
}
