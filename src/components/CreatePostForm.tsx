import { useState } from "react";
import { useAddPostMutation } from "../store/postsAPI";



export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [checked, setChecked] = useState(false);
  const [isValidationSuccess, setIsValidationSuccess] = useState<boolean>(true);
  const [addPost] = useAddPostMutation()

  const createNewPost = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if(title.length === 0 || body.length === 0) {
      setIsValidationSuccess(false) 
      return null
    }
    setIsValidationSuccess(true)
    await addPost({title, body, id: String(Date.now())})

    if (checked) {
      setTitle("");
      setBody("");
    }
    
  };
  
  return (
    <section>
      <h2>Create Post</h2>
      <form className="post__form">
        <input
          className="post__form__input"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="post__form__input"
          placeholder="Body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="post__form__buttons">
          <button className="post__form__button" onClick={createNewPost}>
            Create Post
          </button>
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked((state) => !state)}
            className="post__form__checkbox"
          />
          <h4>Delete data from the form</h4>
        </div>
        {isValidationSuccess ? null : (
          <p className="post__form__validation__error">
            You didn't specify the title or body
          </p>
        )}
      </form>
    </section>
  );
}
