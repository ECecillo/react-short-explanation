import React from 'react';
import { motion } from 'framer-motion';
import TreeElement from './TreeElement';

const DOMAnimation = () => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl mb-4">
        Illustration de la construction d'une page web
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <div className="font-bold">{`<html>`}</div>
        <div className="ml-2">
          <div>
            <TreeElement label="<head>" depth={1}>
              <TreeElement label="title" />
              <TreeElement label="link" />
              <TreeElement label="script" />
            </TreeElement>
            <TreeElement label="</head>" />
            <TreeElement label="<body>" depth={1}>
              <TreeElement label="header">
                <TreeElement label="nav" />
              </TreeElement>
              <TreeElement label="main">
                <TreeElement label="section">
                  <TreeElement label="h1" />
                  <TreeElement label="p" />
                </TreeElement>
              </TreeElement>
              <TreeElement label="<footer />" />
            </TreeElement>
            <TreeElement label="</body>" />
          </div>
        </div>
        <div className="font-bold">{`</html>`}</div>
      </motion.div>
    </div>
  );
};

export default DOMAnimation;
