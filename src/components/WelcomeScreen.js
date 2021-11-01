import React from 'react';
import {motion} from "framer-motion";

const WelcomeScreen = ({ isVisible, handleClick }) => {
    const welcomeScreenVariant = {
        visible: {
            opacity: 1
        },

        hidden: {
            opacity: 0
        }
    }


    return <motion.div
        className='Background'
        initial={false}
        variants={welcomeScreenVariant}
        animate={!isVisible ? "visible" : "hidden"}
        >
                
        <motion.div >  
            <motion.div className='Icon'>
                <motion.img className="BookmarkLogo" src="bookmark.svg"/>
            </motion.div>

            <motion.div className="TagLine">
                Bookmark your
                favourite messages!
            </motion.div>

            <motion.button className='ContinueBtn' onClick={handleClick}>
                Continue
            </motion.button>
        </motion.div>
    </motion.div>
}

export default WelcomeScreen