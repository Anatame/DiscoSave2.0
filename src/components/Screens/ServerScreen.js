import React from 'react';
import { m, motion } from 'framer-motion'
import SearchBar from '../SearchBar'
import MenuButton from '../MenuButton'

const ServerScreen = () => {
    return (
        <motion.div>
            <motion.div className="TopBar">
                <h3 className="title">DiscoSave</h3>
                <motion.div className="SearchBarContainer">
                    <SearchBar/>
                </motion.div>

                <motion.div className="MenuButtonContainer">
                    <MenuButton/>
                </motion.div>
        
                </motion.div>
            </motion.div>


    );
}

export default ServerScreen;
