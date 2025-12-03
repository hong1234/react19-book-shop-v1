import { useState } from "react";
import {
  // useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { saveBook } from "../api/saveBook";
import ProductList from "./ProductList";

function NewBookForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  // const { isLoading, isSuccess, data: books } = useQuery({
  //   queryKey: ['books'],
  //   queryFn: getBooks
  // });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: saveBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
      clearForm();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleTitleChange = (e) => {
    setTitleInput(e.currentTarget.value);
  };

  const handleContentChange = (e) => {
    setContentInput(e.currentTarget.value);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const clearForm = () => {
    setTitleInput("");
    setContentInput("");
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleInput.trim() !== "" && contentInput.trim() !== "") {
      const book = {
        title: titleInput,
        content: contentInput,
      };
      mutate(book);
      // clearForm();
    }
  };

  console.log("book-form rendering ..");
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Admin</h4>
      {isOpen ? (
        <form className="" onSubmit={handleSubmit}>
          <div className="col-12">
            <label className="form-label">Title:</label>
            <input
              type="text"
              name="title"
              value={titleInput}
              onChange={handleTitleChange}
              className="form-control"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Description:</label>
            <input
              type="text"
              name="content"
              value={contentInput}
              onChange={handleContentChange}
              className="form-control"
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
          </div>
        </form>
      ) : (
        <div className="">
          <button
            type="button"
            onClick={handleClickOpen}
            className="btn btn-primary"
          >
            New Book
          </button>
        </div>
      )}

      {/* <ProductList books={books} /> */}
    </div>
  );
}

export default NewBookForm;
