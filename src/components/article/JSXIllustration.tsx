import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import { useTheme } from '../theme/ThemeContext';

const code = `const HelloWorld = (
  <div className='bg-blue-200 ...'>
    <h1 className='..'>Bonjour, monde !</h1>
    <p>Ceci est un exemple de code JSX.</p>
  </div>
);`;

const babel = ` const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Bonjour, monde !'
  );
`;

const reactElement = `const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Bonjour, monde !'
  }
};
`;

const JSXIllustration = () => {
  // Flemme de gérer sur composant plus haut.
  const { theme } = useTheme();

  const alignCodeBlocks = 'flex flex-col items-center';

  const [primaryBackgroundColor, setPrimaryBackgroundColor] =
    React.useState('bg-gray-900');
  const [codeBlocksBackgroundColor, setCodeBlocksBackgroundColor] = React.useState('');

  useEffect(() => {
    const primaryBackgroundColorValue =
      theme === 'light'
        ? 'bg-white'
        : theme === 'dark'
        ? 'bg-gray-900'
        : 'bg-sky-950';
    const codeBlocksBackgroundColorValue =
      theme === 'light' ? 'bg-gray-100' : 'bg-sky-900';
    setPrimaryBackgroundColor(primaryBackgroundColorValue);
    setCodeBlocksBackgroundColor(codeBlocksBackgroundColorValue);
  }, [theme]);

  return (
    <div className={`${primaryBackgroundColor} p-4 rounded-l`}>
      <h4 className="text-xl mb-4 font-semibold">
        Exemple de code JSX compilé et affiché :
      </h4>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
      >
        <div className={alignCodeBlocks}>
          <p className="text-l font-semibold m-2">Etape 1 - J'écris mon code JSX</p>
          <pre
            className={`${codeBlocksBackgroundColor} w-full text-sm overflow-scroll p-4 rounded mb-4 text-left`}
          >
            {code}
          </pre>
        </div>
        <div className={alignCodeBlocks}>
          <p className="text-l font-semibold m-2">
            Etape 2 - Babel compile JSX vers des appels à React.createElement().
          </p>
          <pre
            className={`${codeBlocksBackgroundColor} w-full text-sm overflow-scroll p-4 rounded mb-4 text-left`}
          >
            {babel}
          </pre>
        </div>
        <div className={alignCodeBlocks}>
          <p className="text-l font-semibold">
            Etape 3 - React.createElement() effectue quelques vérifications pour
            avoir un code sans bug, et créer un objet de la forme:
          </p>
          <pre
            className={`${codeBlocksBackgroundColor} w-full p-4 text-sm overflow-scroll rounded mb-4 text-left`}
          >
            {reactElement}
          </pre>
        </div>
        <div className={alignCodeBlocks}>
          <p className="text-l font-semibold m-2">
            Etape 4 - React lit cette objet et construit le
            <a
              className="text-blue-400"
              href="https://fr.reactjs.org/docs/faq-internals.html"
            >
              {' '}
              DOM virtuel{' '}
            </a>
            ("une copie du DOM affiché") qui affichera la chose suivante :
          </p>
          <pre
            className={`${codeBlocksBackgroundColor} p-4 w-full text-sm overflow-scroll rounded mb-4 text-left`}
          >
            <h1 className="font-extrabold">Bonjour, monde !</h1>
            <p>Ceci est un exemple de code JSX.</p>
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default JSXIllustration;
