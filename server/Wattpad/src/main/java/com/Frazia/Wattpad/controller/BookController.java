package com.Frazia.Wattpad.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Frazia.Wattpad.Model.Book;
import com.Frazia.Wattpad.repository.BookRepository;



@RestController

public class BookController {
     


	@Autowired
	private BookRepository bookrespository;
	
	@PostMapping("/book")
	Book Newpost(@RequestBody Book Newbook) {
		return bookrespository.save(Newbook);
		
	}
	
	@GetMapping("/books")
	List<Book> getAllPosts(){
		return bookrespository.findAll();
	}
}
