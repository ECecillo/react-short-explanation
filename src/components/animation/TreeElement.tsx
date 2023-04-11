import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

type TreeElementProps = {
  label: string;
  children?: React.ReactNode;
  depth?: number;
};

const TreeElement = ({ label, children, depth = 0 }: TreeElementProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative pl-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, transition: { delay: depth * 0.5 } } : {}}
        className="mb-2"
      >
        {label}
      </motion.div>
      {children && (
        <div className="ml-2">
          <div>
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child! as ReactElement, { depth: depth + 1 }),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeElement;
