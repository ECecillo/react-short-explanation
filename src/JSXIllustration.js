import React from 'react';
import { motion } from 'framer-motion';

const code =
`const HelloWorld  = (
  <div className='bg-blue-200 ...'>
    <h1 className='..'>Bonjour, monde !</h1>
    <p>Ceci est un exemple de code JSX.</p>
  </div>
);`;

const JSXIllustration = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h4 className="text-xl mb-4 font-semibold">Exemple de code JSX compilé et affiché :</h4>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2 } }}>
        <p className='text-l font-semibold m-2'>Etape 1 - J'écris mon code JSX</p>
        <pre className="bg-gray-200 p-4 rounded mb-4 text-left">{code}</pre>
        <p className='text-l font-semibold'>Etape 2 - Babel compile JSX vers des appels à React.createElement().</p>
        <div className='bg-blue-100 m-4 rounded mb-4 text-left'>
          <pre className='text-left'>{`
          const element = React.createElement(
            'h1',
            {className: 'greeting'},
            'Bonjour, monde !'
          );
          `}</pre>
        </div>
        <p className='text-l font-semibold'>
          Etape 3 - React.createElement() effectue quelques vérifications pour avoir un code sans bug, et créer un objet de la forme:
        </p>
        <div className='bg-blue-100 m-4 rounded mb-4 text-left'>
          <pre className='text-left'>{`
          const element = {
            type: 'h1',
            props: {
              className: 'greeting',
              children: 'Bonjour, monde !'
            }
          };
          `}</pre>
        </div>
        <p className='text-l font-semibold m-2'>
          Etape 4 - React lit cette objet et construit le
          <a className='text-blue-400' href="https://fr.reactjs.org/docs/faq-internals.html"> DOM virtuel </a>
          ("une copie du DOM affiché") qui affichera la chose suivante :
        </p>
        <div className='bg-blue-200 p-4 rounded-md'>
          <h1 className='font-extrabold'>Bonjour, monde !</h1>
          <p>Ceci est un exemple de code JSX.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default JSXIllustration;
