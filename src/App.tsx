import { useState } from 'react';
import './App.css';

type Note = {
  id: number;
  title: string;
  content: string;
}

function App() {

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "note title 1",
      content: "content 1"
    },
    {
      id: 2,
      title: "note title 2",
      content: "content 2"
    },
    {
      id: 3,
      title: "note title 3",
      content: "content 3"
    },
    {
      id: 4,
      title: "note title 4",
      content: "content 4"
    },

    {
      id: 5,
      title: "note title 5",
      content: "content 5"
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('title', title);
    console.log('content', content);

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };


  return (
    <div className="app-container">
      <form
        className="note-form"
        onSubmit={(e) => handleSubmit(e)}>
        <input
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={10}
          required></textarea>
        <button type="submit">Add note</button>
      </form>
      <div className="notes-grid">
        {notes.map(({ id, title, content }) => (
          <div className="notes-item" key={id}>
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        )
        )};
      </div>
    </div>
  );
}

export default App;
