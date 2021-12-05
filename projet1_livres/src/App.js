import React from 'react';
import TitrePage from './Components/TitrePage';

function App() {
  return (
    <div className="container">
      <TitrePage>Liste des livres de ma Bibliothèque</TitrePage>
      <div>Liste livres</div>
      <button>Ajouter</button>
    </div>
  );
}

export default App;
