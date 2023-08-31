import React, { useState } from 'react';
import styles from './styles.module.css';

const colors: string[] = [
  '#551312',
  '#8FD8E9',
  '#41632D',
  '#FFFFFF',
  '#864444',
  '#000000',
  '#22462A',
  '#68AFB0',
];

interface ColorBoxProps {
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className={styles['color-box']} style={{ backgroundColor: color }} onClick={handleCopy}>
      <div className={styles['color-circle']} style={{ backgroundColor: color }}></div>
      <span className={styles['color-text']}>{isCopied ? 'Copied!' : color}</span>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  return (
    <div className={styles['color-palette']}>
      <div className={styles['color-grid']}>
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
