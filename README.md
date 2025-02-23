# Wattpad - Book Recommendation System

A full-stack **Book Recommendation System** developed using **React.js** for the frontend and **Spring Boot** for the backend. The application allows users to manage books (Create, Read, Update, Delete) and provides recommendations based on user preferences.

---

##  **Project Structure**

      wattpad-front-master/ 
      
       ├── src/ │ 
         └── Components/ # React.js Frontend Components │
         ├── AddBooks.js # Component to add new books │
         ├── EditBooks.js # Component to edit existing books │ 
         ├── ViewBooks.js # Component to view book details │
         ├── Books.js # Component to list all books │ 
         └── Homepage.js # Homepage with search functionality │ 
         
        ├── server/ │
         └── Wattpad/ │
              └── src/ │
                  └── main/ │ 
                      └── java/com/Frazia/Wattpad │ 
                            ├── controller/ │ 
                                 └── BookController.java # REST API Controller for book operations │ 
                             ├── model/ │ 
                                 └── Book.java # Book entity with fields (id, name, genre, author, review) │ 
                             ├── repository/ 
                                  └── BookRepository.java # Spring Data JPA Repository for books



---


---

### ✅ **Key Components:**

- **Frontend (`src/Components/`)**
  - Built using **React.js** and **Axios** for API interactions.
  - Components for **CRUD operations** on books (Add, Edit, View, Delete).
  - **Homepage** with search functionality for book recommendations.

- **Backend (`server/Wattpad/src/main/java/com/Frazia/Wattpad/`)**
  - Developed with **Spring Boot** and **Spring Data JPA**.
  - REST API endpoints for:
    - **Creating**, **reading**, **updating**, and **deleting** books.
  - **BookController.java** handles all API requests.
  - **Book.java** defines the book entity.
  - **BookRepository.java** for database operations.


---

##  **Technologies Used**

- **Frontend**: React.js, Axios, Bootstrap
- **Backend**: Spring Boot, Java
- **Database**: MySQL
- **Other Tools**: GitHub, Postman






