import './App.css';

function App() {
  return (
    <div className="app-container">
      <form action="note-form">
        <input
          type="text"
          placeholder="title"
          value=""
          required
        />
        <textarea
          placeholder="Content"
          name=""
          id=""
          cols={20}
          rows={10}
          required
        ></textarea>
        <button type="submit">Add note</button>
      </form>

    </div>
  );
}

export default App;
