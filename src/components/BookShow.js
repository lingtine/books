import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [isEdit, setIsEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleClickRemove = () => {
    deleteBookById(book.id);
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };
  const handleSubmit = () => {
    setIsEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (isEdit) content = <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className="book-show">
      <img
        className="image"
        alt={book.id}
        src={`https://picsum.photos/seed/${book.id}/200/300`}
      />

      <div>{content}</div>

      <div className="actions">
        <button className="edit" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClickRemove}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
