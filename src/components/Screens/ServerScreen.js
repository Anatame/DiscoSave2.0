import React, {useState} from 'react';
import { motion } from 'framer-motion'
import SearchBar from '../SearchBar'
import MenuButton from '../MenuButton'
import PathLabels from '../PathLabels'

const ServerScreen = () => {
    const [paths, setPaths] = useState([
        {
            id: 0,
            name: "Server"
        },
        {
            id: 1,
            name: "Messages"
        }
    ])

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
            
            <motion.div className="BodyContainer">
                <motion.div className="PathsContainer">
                    <PathLabels paths={paths}/>
                </motion.div>   

                <motion.div className="ListContainer">

                </motion.div>
            </motion.div>

        </motion.div>


    );
}

export default ServerScreen;
