import DOMAnimation from '../../components/animation/DOMAnimation';

const DOMArticle = {
  id: 'DOM_Article',
  title: 'Le Document Object Model (DOM) 📄',
  text: [
    "Le Document Object Model (DOM) est une interface de programmation pour les documents HTML et XML. Il représente la structure d'un document et permet à un langage de script, comme JavaScript, de manipuler le contenu, la structure et le style d'un document.",
    "Le DOM est représenté sous forme d'arbre, avec des éléments HTML représentés par des nœuds. Chaque nœud a des attributs, des propriétés et des méthodes associées qui peuvent être modifiées à l'aide de JavaScript.",
    'Dans cette section, nous illustrerons comment une page web est construite en utilisant des animations.',
  ],
  hasIllustration: true,
  IllustrationComponent: () => <DOMAnimation />,
};

export default DOMArticle;
