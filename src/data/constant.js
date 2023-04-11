import COMPONENTS_ARTICLE from './components/components-article';
import DOMArticle from './dom/dom-data';
import JSXArticle from './jsx/jsx-data';
import PROPS_ARTICLE from './props/props-article';
import REACTArticle from './react_first/react-data';
import VIRTUAL_DOM_ARTICLE from './virtual-dom-with-react/virtual-dom-article-data';

export const chapters = [
  { id: 'DOM', title: 'Le DOM' },
  { id: 'REACT_SIMPLE', title: "Qu'est-ce donc que React ?" },
  { id: 'JSX', title: 'JSX et React 💙' },
  { id: 'VIRTUAL_DOM', title: 'Mise à jour du DOM avec React 🚀' },
  { id: 'COMPONENTS', title: 'Composants 🧩' },
  { id: 'PROPS', title: 'Props 💾' },
  { id: 'LIFECYCLE', title: "Le cycle de vie d'un composant" },
];

export const articles = [
  { chapter: chapters[0].id, ...DOMArticle },
  { chapter: chapters[1].id, ...REACTArticle },
  { chapter: chapters[2].id, ...JSXArticle },
  { chapter: chapters[3].id, ...VIRTUAL_DOM_ARTICLE },
  { chapter: chapters[4].id, ...COMPONENTS_ARTICLE },
  { chapter: chapters[5].id, ...PROPS_ARTICLE },
];
