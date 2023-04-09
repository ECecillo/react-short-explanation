import React from 'react'

function VIRTUALDOMwithReact() {
  return (
     <div className="container mx-auto p-4">
      <h3 className="text-3xl mb-4">Mise à jour du DOM avec React 🚀 </h3>
      <p className="mb-4">
        Lorsque React reçoit ces éléments React, il construit le DOM virtuel, qui est une représentation en mémoire
        des éléments du DOM réel. React utilise le DOM virtuel pour déterminer quelles modifications doivent être apportées au
        DOM réel pour mettre à jour l'interface utilisateur en fonction de l'état de l'application et des données.
      </p>
      <p className="mb-4">
        En utilisant le DOM virtuel, React optimise les mises à jour du DOM en effectuant des comparaisons et en ne modifiant que
        les parties qui ont changé. Cette approche s'appelle la réconciliation, et elle permet à React d'offrir des performances élevées
        et une expérience utilisateur fluide.
      </p>
      <div className='flex flex-col justify-center items-center'>
        <img src="https://fr.reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif" alt="React DOM animation" />
      </div>
    </div>
  )
}

export default VIRTUALDOMwithReact
