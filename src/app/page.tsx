"use client";

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import Navbar from './components/Navbar';

export default function Home() {
  const icons = [
    { component: FaHtml5 },
    { component: FaCss3Alt },
    { component: FaJsSquare },
    { component: FaReact },
    { component: FaPython },
  ];

  const radius = 200;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-500">
      <Navbar />


      <motion.div
        className="relative"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * (2 * Math.PI);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const IconComponent = icon.component;

          return (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center p-4 my-4 bg-white rounded-full shadow-lg"
              style={{
                top: radius + y,
                left: radius + x,
                transform: `translate(-50%, -50%)`,
              }}
              whileHover={{ scale: 1.3 }}
            >
              <IconComponent size={50} color="orange" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
