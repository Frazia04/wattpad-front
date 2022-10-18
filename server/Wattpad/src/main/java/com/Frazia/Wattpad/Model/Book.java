package com.Frazia.Wattpad.Model;



	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.Id;

	import lombok.Data;

	@Data
	@Entity

	public class Book {
		
		@Id
		@GeneratedValue
		
		private long bookid;
		private String name;
		private String genre;
		private String author ;
		private String review;
		
		public long getbookid() {
			return bookid;
		}
		public void setbookid(long bookid) {
			this.bookid= bookid;
		}
		public String getname() {
			return name;
		}
		public void setname(String name) {
			this.name = name;
		}
		public String getgenre() {
			return genre;
		}
		public void setGenre( String genre) {
			this.genre = genre;
		}
		public String getauthor() {
			return author;
		}
		public void setauthor(String author) {
			this.author = author;
		}
		public String getreview() {
			return review;
		}
		public void setreview(String review) {
			this.review = review;
		}
		
		

	}


