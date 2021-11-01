import React, {useState} from 'react';
import {motion, AnimateSharedLayout } from 'framer-motion';
import WelcomeScreen from "./WelcomeScreen";

const Home = () => {
    const [isVisible, setVisible] = useState(false)
    const [isExpanded, setExpanded] = useState(false)

    const backgroundCardVariant = {
        collapsed: {scale : 1},
        expanded: {scale : 1.5},
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
                        <WelcomeScreen isVisible={isVisible} handleClick={handleClick}/>
                    </motion.div>
                </AnimateSharedLayout>
            </div>
        );
}

export default Home;
