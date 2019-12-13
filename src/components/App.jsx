import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../note";



function App() {
  return (
    <div>
      <Header />
      {note.map((noteEntry) => {
        return <Note
          title={noteEntry.title}
          content={noteEntry.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
