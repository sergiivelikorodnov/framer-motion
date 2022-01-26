import { motion, AnimateSharedLayout } from 'framer-motion';
import { useState } from 'react';

const menuData = ['Short', 'Very Loooong Data', 'Normal Data'];

function Menu() {
  const [activeIndex, setActive] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        padding: '1rem',
        backgroundColor: '#eee',
        borderRadius: '25px',
      }}
    >
      <AnimateSharedLayout>
        {menuData.map((item, index) => (
          <MenuItem
            key={item}
            item={item}
            isSelected={activeIndex === index}
            handleClick={() => setActive(index)}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  );
}

export default Menu;

function MenuItem(props) {
  const { item, isSelected, handleClick = Function.prototype } = props;

  return (
    <motion.div
      layout
      onClick={handleClick}
      style={{
        margin: '0 0.5rem',
        fontWeight: 900,
        cursor: 'pointer',
        position: 'relative',
      }}
      initial={{ color: '#000' }}
      animate={{ color: isSelected ? '#ff0000' : '#000' }}
    >
      {isSelected && <ActiveLine />}
      {item}
    </motion.div>
  );
}

function ActiveLine() {
  return (
    <motion.div
      layoutId='activeItem'
      style={{
        width: 'calc(100% - 10px)',
        height: '4px',
        position: 'absolute',
        bottom: '-6px',
        left: '5px',
        backgroundColor: '#ff0000',
      }}
    />
  );
}
