import { motion } from 'framer-motion';
;

const Button = ({text, handleClick=Function.prototype, isSelected}) =>{
    return(
        <motion.button
            onClick={handleClick}
            style ={buttonStyle }
            whileHover={{backgroundColor:'#ddd'}}
            whileTap={{backgroundColor:'#ccc'}}
        >
            {isSelected && <BgSelector />}
            <motion.span
                animate={{color: isSelected ? '#fff' : '#000'}}
                style={{position:'relative'}}
            >
                {text}
            </motion.span>
        </motion.button>
    )
}

export default Button;

const buttonStyle={
  border: 'none',
  outline: 'none',
  padding: '12px 16px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  position: 'relative',
}

const BgSelector = () =>{
    return(
        <motion.div
            layoutId='selectedButton'
            style={{
                width:'100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                backgroundColor:'#ff0000',
            }}
        />
    )
}