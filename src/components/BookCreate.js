import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [value, setValue] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(value);
    setValue("");
  };

  return (
    <div className="book-create">
      <h3>Add the book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={value} onChange={handleChange} className="input" />
        <button type="submit" className="button ">
          Add book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
