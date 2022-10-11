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
		
		private long Bookid;
		private String Name;
		private String Genre;
		private String Author ;
		private String Review;
		
		public long getBookid() {
			return Bookid;
		}
		public void setPostid(long Bookid) {
			this.Bookid= Bookid;
		}
		public String getName() {
			return Name;
		}
		public void setName(String Name) {
			this.Name = Name;
		}
		public String getGenre() {
			return Genre;
		}
		public void setGenre( String Genre) {
			this.Genre = Genre;
		}
		public String getAuthor() {
			return Author;
		}
		public void setAuthor(String Author) {
			this.Author = Author;
		}
		public String getReview() {
			return Review;
		}
		public void setReview(String Review) {
			this.Review = Review;
		}
		
		

	}


