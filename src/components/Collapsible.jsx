import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Collapsible =(props)=>{
    const {
        title= 'click me',
        children,
    }=props;

    const [isVisible, setVisible] = useState(true);

    const handleVisibility = () => {
        setVisible(!isVisible)
    };

    return(
        <>
            <div
                onClick={handleVisibility}
                style={{
                    backgroundColor: '#ddd',
                    padding:'0.8rem 1.2rem',
                    width: 300,
                }}
            >
                {title}
            </div>
            <AnimatePresence initial={false}>
                {isVisible && (
                <motion.div
                    initial={{height:0}}
                    animate={{height:'auto'}}
                    exit={{height:0}}
                    style={{overflow: 'hidden', border: '1px solid #ddd',}}
                >
                    <div style={{padding:'0.8rem 1.2rem', width: 300}}>
                        {children}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Collapsible;