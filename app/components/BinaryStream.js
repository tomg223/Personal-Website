import React from 'react';
import { motion } from 'framer-motion';
import './BinaryStream.css';

const BinaryStream = () => {
  // Binary stream text to be repeated
  const binaryText = '1010101011001100110011010101010110110011 1010101011001100110011010101010110110011 10101010110011001100110101010101101100111001101010101011011001110011010101010110110011 10011010101010110110011 ';
  
  // Create an array to represent the number of binary lines
  const lines = Array.from({ length: 5 }); // Adjust the length for the number of lines you want

  return (
    <div className="binary-stream-container">
      {lines.map((_, index) => {
        // Randomize direction and speed for each line
        const horizontalDirection = index % 2 === 0 ? ['0%', '-100%'] : ['-50%', '100%'];
        const duration = Math.random() * 20 + 20; // Random duration between 20 and 40

        return (
          <motion.div
            key={index}
            className="binary-stream"
            animate={{ x: horizontalDirection }}
            transition={{ repeat: Infinity, duration: duration, ease: 'linear' }}
          >
            {binaryText.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="binary-character"
                animate={{ rotate: 90 }}
                transition={{ repeat: Infinity, duration: 5, delay: charIndex * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default BinaryStream;
