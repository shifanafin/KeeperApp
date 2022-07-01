import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/note";

function App() {
  return (
    <div className="App">
    <Header />
    {notes.map(notes=>
      <Note 
      key={notes.id}
      title={notes.title}
      note={notes.note}/>)}
    
    <Footer />
    </div>
  );
}

export default App;
