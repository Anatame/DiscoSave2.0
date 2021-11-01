import React, {useState} from 'react';
import {motion, AnimateSharedLayout } from 'framer-motion';
import WelcomeScreen from "./Screens/WelcomeScreen";
import ServerScreen from "./Screens/ServerScreen";
import { AnimatePresence } from '../../node_modules/framer-motion/dist/framer-motion.cjs';

const Home = () => {
    const [isVisible, setVisible] = useState(true)
    const [isExpanded, setExpanded] = useState(false)

    const backgroundCardVariant = {
        collapsed: {scale : 1},
        expanded: {scale : 1.5},
    }

    const welcomeVariant = {
        visible: { opacity: 1 },
        hidden: { opacity: 0}
    }
    

    const handleClick = () => {
        setVisible(state => !state)
        setExpanded(state => !state)
    }

    return (
            <div>
                <AnimateSharedLayout>
                <motion.div layout
                    className='Background'
                    variants={backgroundCardVariant}
                    animate={isExpanded ? "expanded" : "collapsed"}
                >
                    {!isVisible && (
                        <ServerScreen/>
                    )}  
      
                    <AnimatePresence>
                      {  isVisible && (<motion.div 
                            variants={welcomeVariant}
                            animate={!isVisible ? "hidden" : "visible"}
                            exit={{display: "block"}}
                        >
                            <WelcomeScreen handleClick={handleClick}/>
                        </motion.div>)}
                    </AnimatePresence>
               
                 
                 </motion.div>
                </AnimateSharedLayout>
            </div>
        );
}

export default Home;
