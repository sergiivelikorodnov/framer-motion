import { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Button from './Button';

const Filter = ({ data }) => {
  const [cards, setCards] = useState(data);
  const [selected, setSelected] = useState(0);

  const buttonsCategories = data.reduce((acc, el) => {
    if (acc.includes(el.category)) return acc;

    return [...acc, el.category];
  }, ['all']);

  const handleFilter = (selector) => {
    if(selector==='all') return setCards(data);
    setCards(data.filter((el) => el.category === selector));
  };

  return (
    <div>
      <motion.div>
        {buttonsCategories.map((btn, index) => (
          <Button
            key={btn}
            text={btn}
            handleClick={() => {
                handleFilter(btn);
                setSelected(index);
            }}
            isSelected={selected===index}
          />
        ))}
      </motion.div>
      <AnimateSharedLayout>
        <motion.div
            style={{
                maxWidth: 400,
                overflow: 'hidden',
                border: '1px solid #ccc'
                }}
            layout
            >
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {cards.map((card) => (
              <motion.div
                key={card.title}
                style={boxStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {card.title}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Filter;

const boxStyle = {
  float: 'left',
  backgroundColor: '#2196F3',
  color: '#ffffff',
  width: '100px',
  lineHeight: '100px',
  textAlign: 'center',
  margin: '2px',
};
