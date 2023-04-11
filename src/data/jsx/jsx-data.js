import JSXIllustration from '../../components/article/JSXIllustration';

const JSXArticle = {
  id: 'JSX_Article',
  title: 'JSX et React 💙',
  text: [
    'Le JSX est une syntaxe qui facilite la description des interfaces utilisateur dans React. Il est transformé en appels de fonctions JavaScript lors de la compilation et interprété par React pour créer et mettre à jour le DOM de manière optimisée.',
  ],
  hasIllustration: true,
  IllustrationComponent: () => <JSXIllustration />,
};

export default JSXArticle;
