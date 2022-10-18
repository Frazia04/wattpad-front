package com.Frazia.Wattpad.exception;


public class BookNotFoundException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public BookNotFoundException(Long bookid) {
		super("Could not find the book with id "+bookid);
	}

	

}
