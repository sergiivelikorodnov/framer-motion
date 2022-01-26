import './App.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Collapsible from './components/Collapsible';
import Filter from './components/Filter';
import Menu from './components/Menu';
import { data } from './data';

function App() {
  return <AnimateSharedLayout>
        <motion.div className='App' layout>
          <Collapsible title='Toggle content'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, voluptas.<br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste exercitationem mollitia praesentium! <br/>
              Sed excepturi repudiandae rem itaque illo tempore vel?
          </Collapsible>
          <Filter data={data}/>
          <Menu/>
        </motion.div>;
  </AnimateSharedLayout>

}

export default App;
