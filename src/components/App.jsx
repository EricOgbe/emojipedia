import React from "react";
import Card from "./Card.js"
import emojipedia from "../emojipedia.js"


function createCard(emoji) {
  return (<Card 
  key={emoji.id}
  name={emoji.name}
  emoji={emoji.emoji}
  title={emoji.meaning}
  />)
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
