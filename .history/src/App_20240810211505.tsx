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
        <textarea name="" id="" cols={20} rows={10}
        ></textarea>
      </form>

    </div>
  );
}

export default App;
