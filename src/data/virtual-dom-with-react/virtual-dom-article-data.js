const VIRTUAL_DOM_ARTICLE = {
  id: 'VIRTUAL_DOM_ARTICLE',
  title: 'Mise à jour du DOM avec React 🚀',
  text: [
    "Lorsque React reçoit ces éléments React, il construit le DOM virtuel, qui est une représentation en mémoire des éléments du DOM réel. React utilise le DOM virtuel pour déterminer quelles modifications doivent être apportées au DOM réel pour mettre à jour l'interface utilisateur en fonction de l'état de l'application et des données.",
    "En utilisant le DOM virtuel, React optimise les mises à jour du DOM en effectuant des comparaisons et en ne modifiant que les parties qui ont changé. Cette approche s'appelle la réconciliation, et elle permet à React d'offrir des performances élevées et une expérience utilisateur fluide.",
  ],
  hasIllustration: true,
  IllustrationComponent: () => (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://fr.reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif"
        alt="React DOM animation"
      />
    </div>
  ),
};

export default VIRTUAL_DOM_ARTICLE;
