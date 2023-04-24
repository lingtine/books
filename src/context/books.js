import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();
const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3004/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3004/books", { title });

    const booksUpdated = [...books, response.data];
    setBooks(booksUpdated);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3004/books/${id}`);
    const booksUpdated = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(booksUpdated);
  };
  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3004/books/${id}`, {
      title,
    });

    const booksUpdated = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(booksUpdated);
  };
  const valueSharing = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueSharing}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };

export default BooksContext;
