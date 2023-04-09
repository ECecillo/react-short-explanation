import React from 'react'
import ComponentsIllustration from './Components-hierarchy.svg'


function COMPONENTSExplanation() {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl mb-4">Composants 🧩 et Props 🧐</h3>
      <h4 className="text-2xl mb-4">- Composants -</h4>
      <p className="mb-4">
        Les composants sont les éléments de base pour construire l'interface utilisateur.
        Ils sont essentiellement des morceaux de code réutilisables qui représentent une partie spécifique de l'interface utilisateur,
        tels que des boutons, des formulaires, des en-têtes, etc.
      </p>
      <p className="mb-4">
        Ils utilisent la syntaxe JSX, gèrent les données à travers les props et le state,
        et interagissent avec les événements et le cycle de vie pour créer des applications web dynamiques.
      </p>
      <img src={ComponentsIllustration} alt="Components Illustration" />
    </div>
  );
}

export default COMPONENTSExplanation
